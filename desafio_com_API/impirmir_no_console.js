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

const displayConsole = async (fn) => {
  console.log(await fn);
};
displayConsole(displayTheCheapestProduct());
