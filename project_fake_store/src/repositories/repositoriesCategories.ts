import knex from "knex";
import config from "../../knexfile";
import { Knex } from "knex";

const knexInstance: Knex = knex(config);

const selectAllCategories = async () =>
  await knexInstance("categories").select("*");

const selectOneCategory = async (id: number) =>
  await knexInstance("categories").select("*").where({ "categories.id": id });

const insertOneCategory = async (name: string) =>
  await knexInstance("categories").insert({
    name,
  });

const updateOneCategory = async (id: number, name: string) =>
  await knexInstance("categories").update({ name }).where({ id });

const deleteOneCategory = async (id: number) =>
  await knexInstance("categories").delete().where({ id });

const selectProductsByCategory = async (category: string) => {
  const findCategory = await knexInstance("categories")
    .select("id")
    .where({ name: category });
  if (!findCategory[0]) {
    throw new Error(`Category not found!`);
  }
  return await knexInstance("products")
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
    .where({ "products.category_id": findCategory[0].id });
};

export default {
  selectAllCategories,
  selectOneCategory,
  insertOneCategory,
  updateOneCategory,
  deleteOneCategory,
  selectProductsByCategory,
};
