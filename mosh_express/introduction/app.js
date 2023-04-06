const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();
logger.on("messageLogged", (arg) => {
  console.log("Listner called", arg);
});

logger.log("mensagem");

// emitter.on("logging", (arg) => {
//   console.log(arg);
// });

// emitter.emit("logging", { data: "message" });
