const config = require("config");
const express = require("express");
const Joi = require("joi");
const app = express();
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/home");
const authenticating = require("./authenticating");
const helmet = require("helmet");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:deb");

app.use("/api/courses", courses); //
app.use("/", home);
app.set("view engine", "pug");
app.set("views", "./views");

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(` APP: ${app.get("env")}
// `);

console.log(`Aplication Name: ${config.get("name")}`);
console.log(`Mail Name: ${config.get("mail.host")}`);
// console.log(`Mail Password: ${config.get("mail.password")}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  //   console.log("Morgan enabled...");
  startupDebugger("Morgan enabled...");
}

dbDebugger("Connect to the database....");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

app.use(logger);
app.use(authenticating);
// app.get();
// app.post();
// app.put();
// app.delete();

//Ports
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
