import { Response, Request, NextFunction } from "express";

const registerUser = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send("Registration DOne");
};

export { registerUser };
