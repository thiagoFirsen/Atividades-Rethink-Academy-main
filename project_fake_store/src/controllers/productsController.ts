import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Products, ProductFromDB, Category } from "../types";

const knexInstance = knex(config);

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: Products[] = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "categories.name as category ",
        "products.rate",
        "products.count"
      )
      .join("categories", "categories.id", "=", "products.category_id");

    const formatedProducts: ProductFromDB[] = products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rate,
        count: product.count,
      },
    }));

    res.status(200).send(formatedProducts);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product: Products[] = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "products.image",
        "categories.name as category ",
        "products.rate",
        "products.count"
      )
      .join("categories", "categories.id", "=", "products.category_id")
      .where({ "products.id": id });
    if (!product.length) throw new Error("Product not found");
    const formatedProducts: ProductFromDB[] = product.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: {
        rate: product.rate,
        count: product.count,
      },
    }));

    res.status(200).send(formatedProducts[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      price,
      description,
      category,
      image,
      rating,
    }: ProductFromDB = req.body;
    const findCategory: Category[] = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId: number | undefined = findCategory[0].id;
    if (!categoryId) throw new Error("Category not found");

    const product: Products = {
      title,
      price,
      description,
      image,
      category_id: categoryId,
      rate: rating.rate,
      count: rating.count,
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
    const {
      title,
      price,
      description,
      category,
      image,
      rating,
    }: ProductFromDB = req.body;

    const findCategory: Category[] = await knexInstance("categories")
      .select("id")
      .where({ name: category });

    const categoryId: number | undefined = findCategory[0].id;
    if (!categoryId) throw new Error("Category not found");

    const updateProduct: Products = {
      id,
      title,
      price,
      description,
      image,
      category_id: categoryId,
      rate: rating.rate,
      count: rating.count,
    };
    const productId: number = await knexInstance("products")
      .update(updateProduct)
      .where({ id });
    if (!productId) throw new Error("Product not found");
    res.status(200).send({
      id,
      title,
      price,
      description,
      image,
      category,
      rate: rating.rate,
      count: rating.count,
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
