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

describe("getProducts", () => {
  it("should return an array of objects", async () => {
    expect(Array.isArray(await getProducts())).toBeTruthy();
  });
});

describe("getProductById", () => {
  it("should return an object from an id", async () => {
    expect(await getProductById(1)).toEqual({
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    });
  });
  it("should throw if id is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((element) => {
      expect(async () => await getProductById(element)).rejects.toThrow();
    });
  });
});

describe("getAllProductCategories", () => {
  it("should I check if the categories are present", async () => {
    expect(await getAllProductCategories()).toContain("electronics");
    expect(await getAllProductCategories()).toContain("jewelery");
    expect(await getAllProductCategories()).toContain("men's clothing");
    expect(await getAllProductCategories()).toContain("women's clothing");
  });
});

describe("getProductByCategory", () => {
  it("must check if the past category is present in the object", async () => {
    expect(await getProductByCategory("jewelery")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: "jewelery",
        }),
      ])
    );
  });
  it("should throw if category is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((element) => {
      expect(async () => await getProductByCategory(element)).rejects.toThrow();
    });
  });
});

describe("getProductByRate", () => {
  it("should return an array of products with rating higher than the passed parameter", async () => {
    const minimumRate = 4;
    const result = await getProductByRate(minimumRate);
    expect(result).toEqual(
      expect.arrayContaining(
        result.filter((product) => product.rating.rate > minimumRate)
      )
    );
  });
  it("should throw if minimium Rate is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((element) => {
      expect(async () => await getProductByRate(element)).rejects.toThrow();
    });
  });
});

describe("displayTheProductWithTheMostVotes", () => {
  it("should return a specific number", async () => {
    expect((await displayTheProductWithTheMostVotes()).rating.count).toBe(679);
  });
});

describe("displayTheAveragePriceCalculationForAllProducts", () => {
  it("should return a number", async () => {
    expect(
      typeof (await displayTheAveragePriceCalculationForAllProducts())
    ).toBe("number");
  });
});

describe("displayMoreExpensiveProduct", () => {
  it("should return a specific property and value", async () => {
    expect(await displayMoreExpensiveProduct()).toHaveProperty("price", 999.99);
  });
});

describe("displayTheCheapestProduct()", () => {
  it("should return a specific property and value", async () => {
    expect(await displayTheCheapestProduct()).toHaveProperty("price", 7.95);
  });
});
