"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    //fetch data from request
    //validation
    //normalize
    const userName = 1;
    const password = "11111";
    const result = (0, user_1.addUSerToDB)(userName, password);
    res.send(result);
};
exports.registerUser = registerUser;
