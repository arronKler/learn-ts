import net from "net";
import { AuthMethods, CommandType, AddressType } from "./constants";

let server = net.createServer();
const PORT = 5000;

server.listen(
  {
    port: PORT
  },
  function() {
    console.log("Server listenint to %j", server.address());
  }
);

server.on("connection", function(socket) {
  function handshake(buf: Buffer) {
    socket.removeListener("data", handshake);
    console.log("new buf", buf);
    if (buf[0] != 5) {
      return socket.end(() => {
        console.log("end connection");
      });
    }

    // 方法长度
    const authMethodsLength = buf[1];

    let methods = [];
    for (let i = 0; i < authMethodsLength; i++) {
      methods.push(buf[1 + i]);
    }

    let response = Buffer.alloc(2);
    response[0] = 0x05;
    response[1] = 0x00;

    socket.write(response);
    // socket.removeListener("data", handshake);

    socket.on("data", handleRequest);
    /* if (methods.indexOf(AuthMethods.USERPASS) > -1) {
      // do userpass authenticate
    } else {
      response[1] = 0xff;
      socket.end(response);
    } */
  }

  function handleRequest(buff: Buffer) {
    socket.removeListener("data", handleRequest);
    console.log("handle buf", buff);
    if (buff[0] !== 5) {
      buff[1] = 0x01;
      socket.end(buff); // wrong version
      return;
    }

    let offset = 3;
    let addressType = buff[offset];
    let address = "";
    if (addressType === AddressType.IPv4) {
      address =
        buff[offset + 1] +
        "." +
        buff[offset + 2] +
        "." +
        buff[offset + 3] +
        "." +
        buff[offset + 4];
    } else if (addressType === AddressType.DomainName) {
      address = buff.toString("utf8", offset + 2, buff.length - 2);
    } else if (addressType === AddressType.IPv6) {
      address = buff.slice(offset + 1, buff.length - 2).toString("utf8");
      console.log("problem with ipv6");
    }

    let port = buff.readInt16BE(buff.length - 2);

    console.log("port: %j", port);
    console.log("address: %j", address);
    if (buff[1] === CommandType.TCPConnect) {
      let proxy = net.createConnection(port, address, () => {
        let resp = Buffer.alloc(buff.length);
        buff.copy(resp);
        resp[1] = 0x00;
        socket.write(resp);

        console.log("writed response", resp);

        proxy.pipe(socket);
        socket.pipe(proxy);
        /* proxy.on("data", data => {
          socket.write(data);
        }); */
      });
    } else {
      console.log("not tcp");
      socket.end(buff);
    }
  }

  socket.on("data", handshake);
});
