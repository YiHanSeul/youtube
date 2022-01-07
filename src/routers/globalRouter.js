import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login, logout, see } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

/** globalRouter변수를 export해줌 */
export default globalRouter;
