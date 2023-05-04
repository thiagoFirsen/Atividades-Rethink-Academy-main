import { NextFunction, Request, Response } from "express";
import { object, string, number } from "yup";

const categoryPathValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pathCategory = req.params;
    const pathCategorySchema = object({
      id: string().required("Id é obrigatorio"),
    });
    await pathCategorySchema.validate(pathCategory);
    next();
  } catch (error) {
    next(error);
  }
};
const categoryNameValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pathCategory = req.params;
    const pathCategorySchema = object({
      category: string().required("Categoria é obrigatorio"),
    });
    await pathCategorySchema.validate(pathCategory);
    next();
  } catch (error) {
    next(error);
  }
};

const categoryInsertionValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryData = req.body;

    const categorySchema = object({
      name: string().required("Nome da nova categoria é obrigatoria"),
    });

    await categorySchema.validate(categoryData);
    next();
  } catch (error) {
    next(error);
  }
};

const categoryPutValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pathCategory = req.params;
    const categoryData = req.body;

    const categorySchema = object({
      name: string().required("Nome da nova categoria é obrigatoria"),
    });

    const pathCategorySchema = object({
      id: string().required("Id é obrigatorio"),
    });

    await pathCategorySchema.validate(pathCategory);
    await categorySchema.validate(categoryData);
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  categoryNameValidator,
  categoryPathValidator,
  categoryInsertionValidator,
  categoryPutValidator,
};
