import { Request, Response, NextFunction } from "express";
import serviceCategories from "../service/serviceCategories";
import { Category, Name, Products } from "../types";

const index = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const allCategories: string[] = await serviceCategories.getAllCategories();
    res.status(200).send(allCategories);
  } catch (error: any) {
    next(error);
  }
};

const show = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const category: Category[] = await serviceCategories.getCategory(id);
    res.status(200).send(category[0]);
  } catch (error: any) {
    next(error);
  }
};

const insert = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name }: Name = req.body;
    const newCategory: Category[] = await serviceCategories.createCategory(
      name
    );
    res.status(201).send({ id: newCategory[0], name });
  } catch (error: any) {
    next(error);
  }
};

const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name }: Name = req.body;
    const id: number = parseInt(req.params.id);
    const updateCategory: number = await serviceCategories.updateCategory(
      id,
      name
    );

    res.status(200).json({
      id,
      name,
    });
  } catch (error: any) {
    next(error);
  }
};
const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const deleteCategory: number = await serviceCategories.deleteCategory(id);
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    next(error);
  }
};
const showProductsByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const category: string = req.params.category;
    const productsByCategory: Products[] =
      await serviceCategories.getProductsByCategory(category);
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
    next(error);
  }
};
export default { index, show, insert, update, remove, showProductsByCategory };
