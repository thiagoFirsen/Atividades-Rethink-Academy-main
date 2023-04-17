import { Router } from "express";
import categoriesController from "../controllers/categoriesController";
const router: Router = Router();

router.get("/:category", categoriesController.showProducts);

export { router };
