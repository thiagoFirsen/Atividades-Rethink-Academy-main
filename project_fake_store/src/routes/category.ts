import { Router } from "express";
import categoriesController from "../controllers/categoryController";
const router: Router = Router();

router.get("/:category", categoriesController.showProducts);

export { router };
