import repositoriesProducts from "../repositories/repositoriesProducts";
import { Products, ProductFromDB, Category } from "../types";

const getAllProducts = async () => {
  try {
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
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const getOneProduct = async (id: number) => {
  try {
    const product = await repositoriesProducts.selectOneProduct(id);
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
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const postOneProduct = async (product: ProductFromDB) => {
  try {
    const { category, rating, ...data } = product;

    const categoryId = await repositoriesProducts.selectProductCategory(
      category
    );
    if (!categoryId[0].id) throw new Error("Category not found");
    const formatedProduct: Products = {
      ...data,
      category_id: categoryId[0].id,
      rate: rating.rate,
      count: rating.count,
    };
    return repositoriesProducts.insertProduct(formatedProduct);
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const updateProduct = async (id: any, product: any) => {
  try {
    const { category, rating, ...data } = product;
    const categoryId = await repositoriesProducts.selectProductCategory(
      category
    );
    if (!categoryId) throw new Error("Category not found");
    const updateProduct: Products = {
      ...data,
      category_id: categoryId,
      rate: rating.rate,
      count: rating.count,
    };
    const productId = await repositoriesProducts.updateProduct(
      id,
      updateProduct
    );

    if (!productId) throw new Error("Product not found");
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const deleteProduct = async (id: any) => {
  const product = await repositoriesProducts.deleteOneProduct(id);
  if (!product) throw new Error("Product not found");
};

export default {
  getAllProducts,
  getOneProduct,
  postOneProduct,
  updateProduct,
  deleteProduct,
};
