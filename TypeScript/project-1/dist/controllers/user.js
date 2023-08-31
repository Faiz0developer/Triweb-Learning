"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    //fetch data from request
    //validation
    //normalize
    const userName = "Faizan";
    const password = "11111";
    const age = 21;
    const result = (0, user_1.addUSerToDB)(userName, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const updateUser = (req, res) => {
    let xStatus = "locked";
    const myUser = {
        id: 1,
        uName: "Azhar",
        password: "string",
        age: 21,
        is_active: false,
        acountStatus: "locked",
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.updateUser = updateUser;
