import knex from "knex";
import config from "../../knexfile";
import { Knex } from "knex";

const knexInstance: Knex = knex(config);

const selectAllProducts = () =>
  knexInstance("products")
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

const selectProduct = (id: number) =>
  knexInstance("products")
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

const selectProductCategory = (category: any) =>
  knexInstance("categories").select("id").where({ name: category });

const insertProduct = (product: any) =>
  knexInstance("products").insert(product);

const updateProduct = (id: any, updateProduct: any) =>
  knexInstance("products").update(updateProduct).where({ id });

const deleteProduct = (id: number) =>
  knexInstance("products").delete().where({ id });

export default {
  selectAllProducts,
  selectProduct,
  selectProductCategory,
  insertProduct,
  updateProduct,
  deleteProduct,
};
