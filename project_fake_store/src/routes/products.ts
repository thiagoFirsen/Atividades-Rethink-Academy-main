import { Router } from "express";
import productsController from "../controllers/productsController";
import { categories, category } from "./categories";
import middleware from "../Middlewares/productDataValidator";

const router: Router = Router();

router.use("/categories", categories);

router.use("/category", category);

router.get("/", productsController.index);

router.get("/:id", middleware.productPathValidator, productsController.show);

router.post("/", middleware.productDataValidator, productsController.insert);

router.put(
  "/:id",
  middleware.productPathValidator,
  middleware.productDataValidator,
  productsController.update
);

router.patch(
  "/:id",
  middleware.productPathValidator,
  middleware.partialProductValidator,
  productsController.partiallyUpdate
);

router.delete(
  "/:id",
  middleware.productPathValidator,
  productsController.remove
);

export { router };
