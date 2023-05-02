import { up } from "../database/20230413162907_create_table_categories";
import repositoriesCategories from "../repositories/repositoriesCategories";

const getAllCategories = async () => {
  try {
    const categories = await repositoriesCategories.selectAllCategories();
    const categoriesFormat = categories.map((category) => category.name);
    return categoriesFormat;
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const getOneCategory = async (id: number) => {
  try {
    const category = await repositoriesCategories.selectOneCategory(id);
    if (!category.length) throw new Error("Categorie not found");
    return category;
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const postOneCategory = async (name: string) => {
  try {
    const newCategory = await repositoriesCategories.insertOneCategory(name);
    return newCategory;
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};
const updateCategory = async (id: number, name: string) => {
  try {
    const updateCategory = await repositoriesCategories.updateOneCategory(
      id,
      name
    );
    if (!updateCategory) throw new Error("Category not found");
    return updateCategory;
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const deleteCategory = async (id: number) => {
  try {
    const deleteCategory = await repositoriesCategories.deleteOneCategory(id);
    if (!deleteCategory) throw new Error("Category not found");
    return deleteCategory;
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

const getProductsByCategory = async (category: string) => {
  try {
    const productsByCategory =
      await repositoriesCategories.selectProductsByCategory(category);
    return productsByCategory;
  } catch (error: any) {
    return error.message ? { error: error.message } : error;
  }
};

export default {
  getAllCategories,
  getOneCategory,
  postOneCategory,
  updateCategory,
  deleteCategory,
  getProductsByCategory,
};
