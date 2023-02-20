import { createServer } from "http";

const app = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("service starting point");
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
