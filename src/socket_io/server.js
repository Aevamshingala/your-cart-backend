import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("connection sucessfully");
  socket.on("chat", (payload) => {
    console.log("this is chat payload", payload);
    io.emit("chat", payload);
  });
});

httpServer.listen(3000, () => {
  console.log("server is ready");
});
