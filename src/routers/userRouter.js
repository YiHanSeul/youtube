import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  startGithubLogin,
  finishGithubLogin,
  see,
} from "../controllers/userController";
import { protectorMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", protectorMiddleware, startGithubLogin);
userRouter.get("/github/finish", protectorMiddleware, finishGithubLogin);
userRouter.get(":id", see);

export default userRouter;
