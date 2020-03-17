import tls from "tls";
import fs from "fs";

const options = {
  key: fs.readFileSync("./ca/server-key.pem"),
  cert: fs.readFileSync("./ca/server-cert.pem")
};

tls
  .createServer(options, socket => {
    console.log(
      "server connected: ",
      socket.authorized ? "authorized" : "unauthorized"
    );

    socket.write("welcome to tls");
    socket.setEncoding("utf8");
    socket.pipe(socket);
  })
  .listen(8000, () => {
    console.log("server started at: 8000");
  });
