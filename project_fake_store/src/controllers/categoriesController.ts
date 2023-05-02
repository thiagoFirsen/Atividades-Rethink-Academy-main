import { Request, Response } from "express";
import serviceCategories from "../service/serviceCategories";
import { Category, Name } from "../types";

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const allCategories = await serviceCategories.getAllCategories();
    res.status(200).send(allCategories);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const category = await serviceCategories.getOneCategory(id);
    res.status(200).send(category[0]);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name }: Name = req.body;
    const newCategory: any = await serviceCategories.postOneCategory(name);
    res.status(201).send({ id: newCategory[0], name });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name }: Name = req.body;
    const id: number = parseInt(req.params.id);
    const updateCategory = await serviceCategories.updateCategory(id, name);

    res.status(200).json({
      id,
      name,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const deleteCategory = await serviceCategories.deleteCategory(id);
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const showProductsByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category: string = req.params.category;
    const productsByCategory = await serviceCategories.getProductsByCategory(
      category
    );
    const formatedProducts = productsByCategory.map((product: any) => ({
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
    res.status(200).send(formatedProducts);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
export default { index, show, insert, update, remove, showProductsByCategory };
