import repositoriesCategories from "../repositories/repositoriesCategories";
import { Category } from "../types";

const getAllCategories = async () => {
  const categories = await repositoriesCategories.selectAllCategories();
  const categoriesFormat = categories.map((category) => category.name);
  return categoriesFormat;
};

const getCategory = async (id: number) => {
  const category = await repositoriesCategories.selectCategory(id);
  if (!category.length) throw new Error("Categorie not found");
  return category;
};

const createCategory = async (name: string) => {
  const newCategory = await repositoriesCategories.insertCategory(name);
  return newCategory;
};
const updateCategory = async (id: number, name: string) => {
  const updateCategory = await repositoriesCategories.updateCategory(id, name);
  if (!updateCategory) throw new Error("Category not found");
  return updateCategory;
};

const deleteCategory = async (id: number) => {
  const deleteCategory = await repositoriesCategories.deleteCategory(id);
  if (!deleteCategory) throw new Error("Category not found");
  return deleteCategory;
};

const getProductsByCategory = async (category: string) => {
  const findCategory: any = repositoriesCategories.findCategory(category);
  if (!findCategory) {
    throw new Error(`Category not found!`);
  }
  const productsByCategory =
    await repositoriesCategories.selectProductsByCategory(findCategory);
  return productsByCategory;
};

export default {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getProductsByCategory,
};
