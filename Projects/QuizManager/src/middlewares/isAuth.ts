import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  //header -->> get token
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    throw new Error("Not authenticated");
    // res.status(401).send('Not authenticated')
  }

  //get token
  const token = authHeader.split(" ")[1];

  ///jwt -->> decode token using sign
  let decodedToken: { userId: String; iat: Number; exp: Number };
  try {
    decodedToken = <any>jwt.verify(token, "keepsecretmythissecretkey");
  } catch (error) {
    throw new Error("Not authenticated");
  }

  if (!decodedToken) {
    throw new Error("Not authenticated");
  }

  //get userId from decoded token
  req.userId = decodedToken.userId;
  next();
};

export { isAuthenticated };
