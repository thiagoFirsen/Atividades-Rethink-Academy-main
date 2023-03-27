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

const urlApi = "https://fakestoreapi.com/products/";
describe("getProducts", () => {
  it("should return an array of objects", async () => {
    expect(Array.isArray(await getProducts(urlApi))).toBeTruthy();
  });

  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await getProducts(url);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("getProductById", () => {
  it("should return an object from an id", async () => {
    expect(await getProductById(urlApi, 1)).toEqual({
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
      expect(
        async () => await getProductById(urlApi, element)
      ).rejects.toThrow();
    });
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await getProductById(url, 1);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("getAllProductCategories", () => {
  it("should I check if the categories are present", async () => {
    expect(await getAllProductCategories(urlApi)).toContain("electronics");
    expect(await getAllProductCategories(urlApi)).toContain("jewelery");
    expect(await getAllProductCategories(urlApi)).toContain("men's clothing");
    expect(await getAllProductCategories(urlApi)).toContain("women's clothing");
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await getAllProductCategories(url);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("getProductByCategory", () => {
  it("must check if the past category is present in the object", async () => {
    expect(await getProductByCategory(urlApi, "jewelery")).toEqual(
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
      expect(
        async () => await getProductByCategory(urlApi, element)
      ).rejects.toThrow();
    });
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await getProductByCategory(url, 1);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("getProductByRate", () => {
  it("should return an array of products with rating higher than the passed parameter", async () => {
    const minimumRate = 4;
    const result = await getProductByRate(urlApi, minimumRate);
    expect(result).toEqual(
      expect.arrayContaining(
        result.filter((product) => product.rating.rate > minimumRate)
      )
    );
  });
  it("should throw if minimium Rate is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((element) => {
      expect(
        async () => await getProductByRate(urlApi, element)
      ).rejects.toThrow();
    });
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await getProductByRate(url, 4);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("displayTheProductWithTheMostVotes", () => {
  it("should return a specific number", async () => {
    expect((await displayTheProductWithTheMostVotes(urlApi)).rating.count).toBe(
      679
    );
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await displayTheProductWithTheMostVotes(url);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("displayTheAveragePriceCalculationForAllProducts", () => {
  it("should return a number", async () => {
    expect(
      typeof (await displayTheAveragePriceCalculationForAllProducts(urlApi))
    ).toBe("number");
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await displayTheAveragePriceCalculationForAllProducts(url);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("displayMoreExpensiveProduct", () => {
  it("should return a specific property and value", async () => {
    expect(await displayMoreExpensiveProduct(urlApi)).toHaveProperty(
      "price",
      999.99
    );
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await displayMoreExpensiveProduct(url);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});

describe("displayTheCheapestProduct()", () => {
  it("should return a specific property and value", async () => {
    expect(await displayTheCheapestProduct(urlApi)).toHaveProperty(
      "price",
      7.95
    );
  });
  it("should throw an error if the API call fails", async () => {
    try {
      const url = "https://fakestoreapi.com/ulrinvalida";
      await displayTheCheapestProduct(url);
    } catch (error) {
      expect(error).toBeTruthy();
      expect(error.message).toBe("Unexpected token < in JSON at position 0");
    }
  });
});
