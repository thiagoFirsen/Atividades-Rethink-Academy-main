import { NextFunction, Request, Response } from "express";
import serviceUsers from "../service/serviceUsers";

const insert = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await serviceUsers.createUser(req.body.user, res.locals.hash);
    res.status(200).send("Usuário Criado com sucesso");
  } catch (error: any) {
    next(error);
  }
};

const verifyPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user, password } = req.body;
    const passwordFromDataBase = await serviceUsers.getPassword(user);
    const loginToken = await serviceUsers.doLogin(
      user,
      password,
      passwordFromDataBase
    );

    res.status(200).json(loginToken);
  } catch (error) {
    next(error);
  }
};

export default { insert, verifyPassword };
