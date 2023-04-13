import knex from "knex";
import config from "./knexfile";

const knexInstance = knex(config);

type Product = {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: string;
};

async function seedProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  await Promise.all(
    products.map(async (product) => {
      const { title, price, description, image, category, rating } = product;

      const categoryId = await knexInstance("categories")
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
