import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Category, ProducTForDb, Product } from "../types";

const knexInstance = knex(config);

const index = async (req: Request, res: Response): Promise<void> => {
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

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
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

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, price, description, category, image, rating }: Product =
      req.body;
    const findCategory: Category[] = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId: number | undefined = findCategory[0].id;
    if (!categoryId) throw new Error("Category not found");
    const product: ProducTForDb = {
      title,
      price,
      description,
      image,
      category_id: categoryId,
      rating,
    };

    const id: number[] = await knexInstance("products").insert(product);

    res.status(201).send({
      id: id[0],
      ...product,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const { title, price, description, category, image, rating }: Product =
      req.body;
    const findCategory: Category[] = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId: number | undefined = findCategory[0].id;
    if (!categoryId) throw new Error("Category not found");

    const updateProduct: ProducTForDb = {
      title,
      price,
      description,
      image,
      category_id: categoryId,
      rating,
    };
    const productId: number = await knexInstance("products")
      .update(updateProduct)
      .where({ id });
    if (!productId) throw new Error("Product not found");
    res.status(200).json({
      ...updateProduct,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product: number = await knexInstance("products")
      .delete()
      .where({ id });
    if (!product) throw new Error("Product not found");
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
