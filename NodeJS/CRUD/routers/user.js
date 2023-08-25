const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

// /user/register
router.post("/register", userController.register);

router.post("/get", userController.get);

router.post("/update", userController.update);

router.post("/delete", userController.delete);
module.exports = router;
