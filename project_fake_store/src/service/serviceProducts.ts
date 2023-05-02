import repositoriesProducts from "../repositories/repositoriesProducts";
import { Products, ProductFromDB, Category } from "../types";

const getAllProducts = async () => {
  const products = await repositoriesProducts.selectAllProducts();
  const formatedProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: {
      rate: product.rate,
      count: product.count,
    },
  }));
  return formatedProducts;
};

const getProduct = async (id: number) => {
  const product = await repositoriesProducts.selectProduct(id);
  const formatedProducts = product.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: {
      rate: product.rate,
      count: product.count,
    },
  }));
  if (!product.length) throw new Error("Product not found");
  return formatedProducts[0];
};

const postProduct = async (product: ProductFromDB) => {
  const { category, rating, ...data } = product;

  const categoryId = await repositoriesProducts.selectProductCategory(category);
  if (!categoryId[0].id) throw new Error("Category not found");
  const formatedProduct: Products = {
    ...data,
    category_id: categoryId[0].id,
    rate: rating.rate,
    count: rating.count,
  };
  return repositoriesProducts.insertProduct(formatedProduct);
};

const updateProduct = async (id: any, product: any) => {
  const { category, rating, ...data } = product;
  const categoryId = await repositoriesProducts.selectProductCategory(category);
  if (!categoryId) throw new Error("Category not found");
  const updateProduct: Products = {
    ...data,
    category_id: categoryId,
    rate: rating.rate,
    count: rating.count,
  };
  const productId = await repositoriesProducts.updateProduct(id, updateProduct);

  if (!productId) throw new Error("Product not found");
};

const deleteProduct = async (id: any) => {
  const product = await repositoriesProducts.deleteProduct(id);
  if (!product) throw new Error("Product not found");
};

export default {
  getAllProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
