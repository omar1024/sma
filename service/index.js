import app from "./app.js";
import { createServer } from "http";
const server = createServer(app);
const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on the ${PORT}`);
});
