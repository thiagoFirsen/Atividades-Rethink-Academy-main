import express, { Request, Response } from 'express';

const app = express();

// Rota GET
app.get('/', (_req: Request, res: Response) => {
  res.send('Olá, mundo!');
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

