import express, { Express, Request, Response } from "express";
import { router } from "./routes";
const app: Express = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Fake Store API</h1>
Fake store rest API for your e-commerce or shopping website prototype`);
});
app.use("/", router);

const port: number = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
