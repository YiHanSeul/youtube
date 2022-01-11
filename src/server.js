import express from "express";
import morgan from "morgan";
/**JS 변수 Import */
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

/** 외부 접속 Listen*/
const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}👂`);
app.listen(PORT, handleListening);
