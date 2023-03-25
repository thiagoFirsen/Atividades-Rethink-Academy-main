//exibir todos os produtos da base de dados;
const getProducts = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    return e;
  }
};

// exibir os dados de um produto a partir do id de um produto fornecido;
const getProductById = async (id) => {
  if (!id) throw new Error("id is required.");
  else {
    const url = `https://fakestoreapi.com/products/${id}`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  }
};

//exibir todos as categorias de produtos;

const getAllProductCategories = async () => {
  try {
    const url = "https://fakestoreapi.com/products/categories";
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    return e;
  }
};

// exibir todos os produtos de uma dada categoria;

const getProductByCategory = async (category) => {
  if (!category) throw new Error("category is required.");
  else {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  }
};

//exibir todos os produtos com rate acima de 4;

const getProductByRate = async (minimumRate) => {
  if (!minimumRate) throw new Error("minimium rate is required.");
  else {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url);
    const resultJson = await result.json();
    const rateGreaterThanThePassedParameter = await resultJson.filter(
      (element) => element.rating.rate > minimumRate
    );
    return rateGreaterThanThePassedParameter;
  }
};

//exibir o produto com mais votos;

const displayTheProductWithTheMostVotes = async () => {
  const url = "https://fakestoreapi.com/products";
  const result = await fetch(url);
  const resultJson = await result.json();
  const productWithTheMostVotes = await resultJson.reduce((acc, cur) => {
    acc = cur.rating.count > acc.rating.count ? cur : acc;
    return acc;
  });
  return productWithTheMostVotes;
};

//exibir o cálculo da média de preços de todos os produtos;

const displayTheAveragePriceCalculationForAllProducts = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url);
    const resultJson = await result.json();
    const SumOfAllProducts = await resultJson.reduce((acc, cur) => {
      acc += cur.price;
      return acc;
    }, 0);

    const averageOfTheSumOfAllProducts =
      (await SumOfAllProducts) / resultJson.length;

    return averageOfTheSumOfAllProducts;
  } catch (e) {
    return e;
  }
};

//exibir o produto mais caro

const displayMoreExpensiveProduct = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url);
    const resultJson = await result.json();
    const highestProduct = await resultJson.reduce((acc, cur) => {
      return cur.price > acc.price ? cur : acc;
    });
    return highestProduct;
  } catch (e) {
    return e;
  }
};

//exibir o produto mais barato.

const displayTheCheapestProduct = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const result = await fetch(url);
    const resultJson = await result.json();
    const cheaperProduct = await resultJson.reduce((acc, cur) => {
      return cur.price < acc.price ? cur : acc;
    });
    return cheaperProduct;
  } catch (e) {
    return e;
  }
};

export {
  getProducts,
  getProductById,
  getAllProductCategories,
  getProductByCategory,
  getProductByRate,
  displayTheProductWithTheMostVotes,
  displayTheAveragePriceCalculationForAllProducts,
  displayMoreExpensiveProduct,
  displayTheCheapestProduct,
};
