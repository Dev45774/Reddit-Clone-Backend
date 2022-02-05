const http = require("http");
const app = require("./app");
const config = require("./utils/config");
const io = require("./websockets/posts");

const server = http.createServer(app);

const PORT = config.PORT || 3001;
server.listen(config.PORT);
console.log("server running on port " + config.PORT);
