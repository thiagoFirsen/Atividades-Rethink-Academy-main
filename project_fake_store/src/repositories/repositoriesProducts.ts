import knex from "knex";
import config from "../../knexfile";
import { Knex } from "knex";

const knexInstance: Knex = knex(config);

const selectAllProducts = async () =>
  await knexInstance("products")
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

const selectOneProduct = async (id: number) =>
  await knexInstance("products")
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

const selectProductCategory = async (category: any) =>
  await knexInstance("categories").select("id").where({ name: category });

const insertProduct = async (product: any) =>
  await knexInstance("products").insert(product);

const updateProduct = async (id: any, updateProduct: any) =>
  await knexInstance("products").update(updateProduct).where({ id });

const deleteOneProduct = async (id: number) =>
  await knexInstance("products").delete().where({ id });

export default {
  selectAllProducts,
  selectOneProduct,
  selectProductCategory,
  insertProduct,
  updateProduct,
  deleteOneProduct,
};
