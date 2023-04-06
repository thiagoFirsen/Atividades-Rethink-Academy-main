const express = require("express");
const route = express.Router();
const genres = [
  { id: 1, name: "Ação" },
  { id: 2, name: "Terror" },
  { id: 3, name: "Comedia" },
  { id: 4, name: "Romance" },
  { id: 5, name: "Ficção ciêntifica" },
];

route.get("/", (req, res) => {
  res.send(genres);
});
module.exports = route;
