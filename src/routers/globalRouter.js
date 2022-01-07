import express from "express";
import { trending } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

/** globalRouter변수를 export해줌 */
export default globalRouter;
