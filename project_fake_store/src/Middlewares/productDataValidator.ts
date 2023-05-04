import { NextFunction, Request, Response } from "express";
import { object, string, number } from "yup";

const productPathValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pathProduct = req.params;
    const pathProductSchema = object({
      id: string().required("Id é obrigatorio"),
    });
    await pathProductSchema.validate(pathProduct);
    next();
  } catch (error) {
    next(error);
  }
};

const productInsertionValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productData = req.body;

    const productSchema = object({
      title: string().required(),
      price: number().required(),
      description: string().required(),
      category: string().required("Categoria é obrigatorio"),
      image: string().required(),
      rating: object({
        rate: number().required(),
        count: number().required(),
      }),
    });

    await productSchema.validate(productData);
    next();
  } catch (error) {
    next(error);
  }
};

const productPutValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pathProduct = req.params;
    const productData = req.body;

    const productSchema = object({
      title: string().required(),
      price: number().required(),
      description: string().required(),
      category: string().required("Categoria é obrigatorio"),
      image: string().required(),
      rating: object({
        rate: number().required(),
        count: number().required(),
      }),
    });

    const pathProductSchema = object({
      id: string().required("Id é obrigatorio"),
    });

    await pathProductSchema.validate(pathProduct);
    await productSchema.validate(productData);
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  productPathValidator,
  productInsertionValidator,
  productPutValidator,
};
