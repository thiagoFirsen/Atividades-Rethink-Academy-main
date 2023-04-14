import knex, { Knex } from "knex";
import config from "./knexfile";
import { ProducTForDb, Product } from "./src/types";

const knexInstance: Knex = knex(config);

async function seedProducts() {
  const response: Response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  await Promise.all(
    products.map(async (product) => {
      const { title, price, description, image, category, rating }: Product =
        product;

      const categoryId: ProducTForDb = await knexInstance("categories")
        .select("id")
        .where("name", category)
        .first();

      if (!categoryId) {
        console.error(`Category not found: ${category}`);
        return;
      }

      await knexInstance("products").insert({
        title,
        price,
        description,
        image,
        category_id: categoryId.id,
        rating,
      });
    })
  );

  console.log(`Inserted ${products.length} products`);
  process.exit();
}

seedProducts();
