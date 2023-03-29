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
const url = "https://fakestoreapi.com/productss/";

const displayConsole = async (fn) => {
  console.log(await fn);
};
displayConsole(getProducts(url));
