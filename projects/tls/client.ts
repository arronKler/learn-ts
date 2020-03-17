import tls from "tls";
import fs from "fs";

const options = {
  ca: [fs.readFileSync("./ca/server-cert.pem")]
};

let socket = tls.connect(8000, "localhost", options, () => {
  console.log(
    "client connected:",
    socket.authorized ? "authorized" : "unauthorized"
  );
  process.stdin.pipe(socket);
  process.stdin.resume();
});

socket.setEncoding("utf8");
socket.on("data", data => {
  console.log(data);
});

socket.on("end", () => {
  console.log("end connection");
});
