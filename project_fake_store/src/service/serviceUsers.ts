import { makeError } from "../Middlewares/errorHandler";
import repositoriesLongin from "../repositories/repositoriesUsers";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";

const createUser = async (user: string, password: string) => {
  const findUser = await repositoriesLongin.findUser(user);
  if (findUser.length !== 0) {
    throw makeError({ message: "Usuario ja existe", status: 400 });
  }
  const newUser = await repositoriesLongin.insertUser(user, password);
  return newUser;
};

const getPassword = async (user: any) => {
  const getPassword = await repositoriesLongin.selectPassword(user);
  return getPassword[0].password;
};

const doLogin = async (
  user: string,
  password: string,
  passwordFromDataBase: string
) => {
  const verifyPassword = bcript.compare(password, passwordFromDataBase);
  if (!verifyPassword) {
    throw makeError({ message: "Senha inválida", status: 400 });
  }
  const userId = await repositoriesLongin.findUser(user);
  const token = jwt.sign(
    {
      userId: userId[0].id,
    },
    process.env.SECRET_TOKEN!,
    { expiresIn: "7 days" }
  );
  return token;
};

export default { createUser, getPassword, doLogin };
