const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Centent-type", "text/html");

  res.end("<h1> Welcome to my node study </h1>");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running...");
});
