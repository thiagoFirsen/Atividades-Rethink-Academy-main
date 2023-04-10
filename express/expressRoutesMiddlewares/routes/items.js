import express from "express";
import { dataBase } from "../dataBase.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(dataBase);
});

router.post("/", (req, res) => {
  const item = {
    id: dataBase.length + 1,
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  dataBase.push(item);
  res.send(dataBase);
});

router.get("/:id", (req, res) => {
  const item = dataBase.find((el) => el.id === parseInt(req.params.id));
  if (!item) {
    res.status(400).send("The product with the given ID was not found");
  } else {
    const itemProductAndPrice = `Produto:  ${item.product}, Preço ${item.price}`;
    res.send(itemProductAndPrice);
  }
});

router.patch("/:id", (req, res) => {
  const item = dataBase.find((el) => el.id === parseInt(req.params.id));
  if (!item) {
    res.status(400).send("The product with the given ID was not found");
  } else {
    item.product = req.body.product;
    res.send(item);
  }
});

router.delete("/:id", (req, res) => {
  const item = dataBase.find((el) => el.id === parseInt(req.params.id));
  if (!item) {
    res.status(400).send("The product with the given ID was not found");
  } else {
    const index = dataBase.indexOf(item);
    dataBase.splice(index, 1);
    res.send(item);
  }
});

export default router;
