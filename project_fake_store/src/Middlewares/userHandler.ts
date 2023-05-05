import { NextFunction, Request, Response } from "express";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";

const doCripto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const password = req.body.password;
    const saltRounds = process.env.SALT!;
    const hash = await bcript.hash(password, Number(saltRounds));
    res.locals.hash = hash;
    next();
  } catch (error) {
    next(error);
  }
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userToken = req.headers.authorization?.split(" ")[1]!;
    //se nao existe token make erro -> Token de autenticação obrigatorio
    const verifyToken = jwt.verify(userToken, process.env.SECRET_TOKEN!);
    //chamar o repositories para verificar se o id presente no token existe de fato no banco de dados
    // se nao existir da o erro -> usuario não existe

    next();
  } catch (error) {
    next(error);
  }
};

export default { doCripto, verifyToken };
