import express from "express";
import { home, search } from "../controllers/videoController";
import { join, login, logout, see } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

/** globalRouter변수를 export해줌 */
export default globalRouter;
