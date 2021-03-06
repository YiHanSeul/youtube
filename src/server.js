import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
/**JS 변수 Import */
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
console.log(process.env.COOKIE_SECRET);
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false, //만료날짜 설정
    saveUninitialized: false, //session을 수정할때만 DB에 저장.
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
// app.use((req, res, next) => {
//   res.locals.sexy = "you";
//   res.locals.siteName = "Youtube";
//   console.log(res);
//   req.sessionStore.all((error, sessions) => {
//     console.log(sessions);
//     next();
//   });
// });
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
