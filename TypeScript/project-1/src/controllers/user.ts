import { Request, Response } from "express";

import { addUSerToDB } from "../models/user";

const registerUser = (req: Request, res: Response) => {
  //fetch data from request
  //validation
  //normalize
  const userName: string = "Faizan";
  const password: string = "11111";
  const age = 21;
  const result = addUSerToDB(userName, password, age);
  res.send(result);
};

export { registerUser };
