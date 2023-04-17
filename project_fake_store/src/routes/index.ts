import { router as productsRoutes } from "./products";
import { router as categoriesRoutes } from "./categories";
import { router as categoryRoutes } from "./category";
import { Router } from "express";

const router: Router = Router();
router.use("/products/categories", categoriesRoutes);
router.use("/products/category", categoryRoutes);
router.use("/products", productsRoutes);

export { router };
