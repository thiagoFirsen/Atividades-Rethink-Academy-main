import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "categories.name as category ",
        "products.rating"
      )
      .join("categories", "categories.id", "=", "products.category_id");
    res.status(200).send(products);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product: Product[] = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "categories.name as category ",
        "products.rating"
      )
      .join("categories", "categories.id", "=", "products.category_id")
      .where({ "products.id": id });
    if (!product.length) throw new Error("Product not found");
    res.status(200).send(product[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, description, category, image, rating } = req.body;
    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId = findCategory[0].id;

    const id: number[] = await knexInstance("products").insert({
      title,
      price,
      description,
      image,
      category_id: categoryId,
      rating,
    });

    res.status(201).send({
      id: id[0],
      title,
      price,
      description,
      image,
      category,
      rating,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, price, description, category, image, rating } = req.body;
    const findCategory = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId = findCategory[0].id;
    const updateProduct = {
      title,
      price,
      description,
      image,
      category_id: categoryId,
      rating,
    };
    const product = await knexInstance("products")
      .update(updateProduct)
      .where({ id });
    if (!product) throw new Error("Product not found");
    res.status(200).json({
      id,
      title,
      price,
      description,
      image,
      category,
      rating,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await knexInstance("products").delete().where({ id });
    if (!product) throw new Error("Product not found");
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
