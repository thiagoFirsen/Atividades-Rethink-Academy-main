import express, { Express, Request, Response } from "express";
import { router } from "./routes";
const app: Express = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/api/v1", router);

const port: number = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
