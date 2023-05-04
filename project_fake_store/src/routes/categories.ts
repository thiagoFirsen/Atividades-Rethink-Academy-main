import { Router } from "express";
import categoriesController from "../controllers/categoriesController";
import middleware from "../Middlewares/categoriesDataValidator";

const categories: Router = Router();
const category: Router = Router();

category.get(
  "/:category",
  middleware.categoryPathNameValidator,
  categoriesController.showProductsByCategory
);

categories.get("/", categoriesController.index);

categories.get(
  "/:id",
  middleware.categoryPathValidator,
  categoriesController.show
);

categories.post(
  "/",
  middleware.categoryDataValidator,
  categoriesController.insert
);

categories.put(
  "/:id",
  middleware.categoryPathValidator,
  middleware.categoryDataValidator,
  categoriesController.update
);

categories.delete(
  "/:id",
  middleware.categoryPathValidator,
  categoriesController.remove
);

export { categories, category };
