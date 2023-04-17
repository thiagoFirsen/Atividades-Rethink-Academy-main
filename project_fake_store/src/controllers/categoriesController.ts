import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";
import { Category, Name } from "../types";

const knexInstance = knex(config);

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories: Category[] = await knexInstance("categories").select("*");

    res.status(200).send(categories);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const categorie: Category[] = await knexInstance("categories")
      .select("*")
      .where({ "categories.id": id });
    if (!categorie.length) throw new Error("Categorie not found");
    res.status(200).send(categorie[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const showProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const category: string = req.params.category;
    const findCategory: Category[] = await knexInstance("categories")
      .select("id")
      .where({ name: category });
    if (!findCategory[0]) {
      throw new Error(`Category not found!`);
    }
    const productsFromCategory = await knexInstance("products")
      .select(
        "products.id",
        "products.title",
        "products.price",
        "products.description",
        "categories.name as category",
        "products.image",
        "products.rating"
      )
      .join("categories", "categories.id", "=", "products.category_id")
      .where({ "products.category_id": findCategory[0].id });
    res.status(200).send(productsFromCategory);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name }: Name = req.body;

    const id: number[] = await knexInstance("categories").insert({
      name,
    });

    res.status(201).send({
      id: id[0],
      name,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name }: Name = req.body;
    const id: number = parseInt(req.params.id);
    const category: number = await knexInstance("categories")
      .update({ name })
      .where({ id });
    if (!category) throw new Error("Category not found");
    res.status(200).json({
      id,
      name,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const category: number = await knexInstance("categories")
      .delete()
      .where({ id });
    if (!category) throw new Error("Category not found");
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove, showProducts };
