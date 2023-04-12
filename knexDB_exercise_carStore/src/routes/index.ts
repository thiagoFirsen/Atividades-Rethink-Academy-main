import { router as carsRoutes } from "./cars";
import { Router } from "express";

const router: Router = Router();

router.use("/cars", carsRoutes);

export { router };
