import { Response, Request, NextFunction } from "express";
import User from "../models/user";

interface ReturnResponse {
  status: "error" | "success";
  message: string;
  data: {};
}

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let resp: ReturnResponse;
  try {
    const user = new User(req.body);
    const result = await user.save();
    if (!result) {
      resp = { status: "error", message: "User Not Found", data: {} };
      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration Done",
        data: { userId: result._id },
      };
      res.send(resp);
    }
  } catch (err) {
    resp = { status: "error", message: "Something went Wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { registerUser };
