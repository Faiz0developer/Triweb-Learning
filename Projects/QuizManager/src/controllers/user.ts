import { Response, Request, NextFunction } from "express";
import User from "../models/user";

interface ReturnResponse {
  status: "error" | "success";
  message: string;
  data: {};
}

// get-->> get user data
const getUser = async (req: Request, res: Response) => {
  // console.log("query", req.query);
  // console.log("params", req.params);
  // console.log("params", req.params.userId);
  let resp: ReturnResponse;
  try {
    const userId = req.params.userId;
    if (req.userId != req.params.userId) {
      throw new Error("Not allowed");
    }
    const user = await User.findById(userId, { name: 1, email: 1 });
    if (!user) {
      resp = { status: "error", message: "User not found", data: {} };
      res.send(resp);
    } else {
      resp = { status: "success", message: "User found", data: user };
      res.send(resp);
    }
  } catch (err) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

//put-->> update user data
const updateUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  try {
    const userId = req.body._id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name;
      await user.save();
      resp = { status: "success", message: "User Updated", data: {} };
      res.send(resp);
    }
  } catch (err) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { getUser, updateUser };
