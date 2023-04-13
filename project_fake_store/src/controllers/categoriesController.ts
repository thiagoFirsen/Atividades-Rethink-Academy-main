import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Category = {
  id?: number;
  name: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const categories: Category[] = await knexInstance("categories").select("*");

    res.status(200).send(categories);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const categorie: Category[] = await knexInstance("categories")
      .select("*")
      .where({ "categories.id": id });
    if (!categorie.length) throw new Error("Categorie not found");
    res.status(200).send(categorie[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

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

const update = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const id = req.params.id;
    const updateCategory = {
      name,
    };
    const category = await knexInstance("categories")
      .update(updateCategory)
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
const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const category = await knexInstance("categories").delete().where({ id });
    if (!category) throw new Error("Category not found");
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
