//exibir todos os produtos da base de dados;

const getProducts = async (url) => {
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    throw e;
  }
};

// exibir os dados de um produto a partir do id de um produto fornecido;
const getProductById = async (url, id) => {
  if (!id) throw new Error("id is required.");
  try {
    const result = await fetch(url + id);
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    throw e;
  }
};

//exibir todos as categorias de produtos;

const getAllProductCategories = async (url, endPoint) => {
  try {
    const result = await fetch(url + "/categories");
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    throw e;
  }
};

// exibir todos os produtos de uma dada categoria;

const getProductByCategory = async (url, category) => {
  if (!category) throw new Error("category is required.");
  try {
    const result = await fetch(url + "/category/" + category);
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    throw e;
  }
};

//exibir todos os produtos com rate acima de 4;

const getProductByRate = async (url, minimumRate) => {
  if (!minimumRate) throw new Error("minimium rate is required.");
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    const rateGreaterThanThePassedParameter = await resultJson.filter(
      (element) => element.rating.rate > minimumRate
    );
    return rateGreaterThanThePassedParameter;
  } catch (e) {
    throw e;
  }
};

//exibir o produto com mais votos;

const displayTheProductWithTheMostVotes = async (url) => {
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    const productWithTheMostVotes = await resultJson.reduce((acc, cur) => {
      acc = cur.rating.count > acc.rating.count ? cur : acc;
      return acc;
    });
    return productWithTheMostVotes;
  } catch (e) {
    throw e;
  }
};

//exibir o cálculo da média de preços de todos os produtos;

const displayTheAveragePriceCalculationForAllProducts = async (url) => {
  try {
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
    throw e;
  }
};

//exibir o produto mais caro

const displayMoreExpensiveProduct = async (url) => {
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    const highestProduct = await resultJson.reduce((acc, cur) => {
      return cur.price > acc.price ? cur : acc;
    });
    return highestProduct;
  } catch (e) {
    throw e;
  }
};

//exibir o produto mais barato.

const displayTheCheapestProduct = async (url) => {
  try {
    const result = await fetch(url);
    const resultJson = await result.json();
    const cheaperProduct = await resultJson.reduce((acc, cur) => {
      return cur.price < acc.price ? cur : acc;
    });
    return cheaperProduct;
  } catch (e) {
    throw e;
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
