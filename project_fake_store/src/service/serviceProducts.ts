import repositoriesProducts from "../repositories/repositoriesProducts";
import { Products, ProductFromDB, Category } from "../types";

const getAllProducts = async (): Promise<ProductFromDB[]> => {
  const products: Products[] = await repositoriesProducts.selectAllProducts();
  const formatedProducts: ProductFromDB[] = products.map((product) => ({
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

const getProduct = async (id: number): Promise<ProductFromDB> => {
  const product: Products[] = await repositoriesProducts.selectProduct(id);
  const formatedProducts: ProductFromDB[] = product.map((product) => ({
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

const postProduct = async (product: ProductFromDB): Promise<Products[]> => {
  const { category, rating, ...data }: ProductFromDB = product;

  const categoryId: any = await repositoriesProducts.selectProductCategory(
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
};

const updateProduct = async (id: any, product: any): Promise<number> => {
  const { category, rating, ...data }: ProductFromDB = product;
  const selectedCategory = await repositoriesProducts.selectProductCategory(
    category
  );
  const categoryId = selectedCategory[0].id;
  if (!categoryId) throw new Error("Category not found");
  const updateProduct: Products = {
    ...data,
    category_id: categoryId,
    rate: rating.rate,
    count: rating.count,
  };
  const productId: number = await repositoriesProducts.updateProduct(
    id,
    updateProduct
  );

  if (!productId) throw new Error("Product not found");
  return productId;
};

const deleteProduct = async (id: any): Promise<number> => {
  const product: number = await repositoriesProducts.deleteProduct(id);
  if (!product) throw new Error("Product not found");
  return product;
};

export default {
  getAllProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
