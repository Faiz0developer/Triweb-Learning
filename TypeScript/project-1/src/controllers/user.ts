import { Request, Response } from "express";

import { addUSerToDB, updateUserData } from "../models/user";

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

const updateUser = (req: Request, res: Response) => {
  type lockedState = "locked" | "unlocked"; //union type
  let xStatus: lockedState = "locked"; // user define type

  const myUser = {
    id: 1,
    uName: "Azhar",
    password: "string",
    age: 21,
    is_active: false,
    acountStatus: "locked",
  };
  const result = updateUserData(myUser);
  res.send(result);
};

const checkTypesAndIntefaceofUser = (req: Request, res: Response) => {
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let num: Point = { x: 1, y: 2 };
  //num.x=4  //Cannot assign to 'x' because it is a read-only property.
};

export { registerUser, updateUser, checkTypesAndIntefaceofUser };
