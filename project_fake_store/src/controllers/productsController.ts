import { Request, Response } from "express";
import serviceProducts from "../service/serviceProducts";
import { ProductFromDB, Products } from "../types";

const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProducts = await serviceProducts.getAllProducts();
    res.status(200).send(allProducts);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const product = await serviceProducts.getProduct(id);
    res.status(200).send(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      title,
      price,
      description,
      category,
      image,
      rating,
    }: ProductFromDB = req.body;
    const product: ProductFromDB = {
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    const insertProduct = await serviceProducts.postProduct(product);
    res.send({ id: insertProduct[0], ...product });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const {
      title,
      price,
      description,
      category,
      image,
      rating,
    }: ProductFromDB = req.body;

    const product: ProductFromDB = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    const updateProduct = await serviceProducts.updateProduct(id, product);

    res.status(200).send(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};
const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = parseInt(req.params.id);
    const deleteProduct = await serviceProducts.deleteProduct(id);
    res.status(200).json({ info: "Product has been deleted" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { index, show, insert, update, remove };
