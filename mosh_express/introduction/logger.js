const EventEmitter = require("events");
let url = "http://mylogger.io/log";
class Logger extends EventEmitter {
  log(message) {
    //Enviar uma solicitação HTTP
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
