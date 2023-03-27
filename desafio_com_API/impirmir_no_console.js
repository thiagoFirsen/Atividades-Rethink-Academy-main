import {
  getProducts,
  getProductById,
  getAllProductCategories,
  getProductByCategory,
  getProductByRate,
  displayTheProductWithTheMostVotes,
  displayTheAveragePriceCalculationForAllProducts,
  displayMoreExpensiveProduct,
  displayTheCheapestProduct,
} from "./index.js";
const url = "https://fakestoreapi.com/products/";

const displayConsole = async (fn) => {
  console.log(await fn);
};
displayConsole(displayTheCheapestProduct(url));
