const Router = require("express");
const userRouter = Router();
const { createUser, login } = require("../controllers/user-controller.js");


userRouter.post("/signup", createUser);
userRouter.post("/login", login);

    module.exports = userRouter;
