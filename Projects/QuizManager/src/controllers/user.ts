import { Response, Request, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";

interface ReturnResponse {
  status: "error" | "success";
  message: string;
  data: {};
}

const registerUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    const name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 12);
    const user = new User({ email, name, password });
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

const loginUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    const password = req.body.password;

    // find user through email
    const user = await User.findOne({ email });

    if (!user) {
      resp = { status: "error", message: "No user exist", data: {} };
      res.status(401).send(resp);
    } else {
      // verify user using bcrypt
      const status = await bcrypt.compare(password, user.password);
      if (status) {
        const token = jwt.sign(
          { userId: user._id },
          "keepsecretmythissecretkey",
          { expiresIn: "1h" }
        );
        resp = {
          status: "success",
          message: "Logged in successfully",
          data: { token },
        };
        res.send(resp);
      } else {
        resp = { status: "error", message: "credentials mismatch", data: {} };
        res.status(401).send(resp);
      }
    }
  } catch (err) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

// get-->> get user data
const getUser = async (req: Request, res: Response) => {
  // console.log("query", req.query);
  // console.log("params", req.params);
  // console.log("params", req.params.userId);
  let resp: ReturnResponse;
  try {
    const userId = req.params.userId;
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

export { registerUser, getUser, updateUser, loginUser };
