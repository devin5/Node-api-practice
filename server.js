const express = require("express");
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

server = express();
server.use(express.json());
server.use(logger);

server.use("/user", userRouter)
server.use("/post", postRouter)

// testendpoint
server.get("/", (req, res) => {
  res.send(`<h2>Never have I been so hungry.. please... let me out</h2>`);
});

//custom middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}
  )}`);
  next();
}

module.exports = server;
