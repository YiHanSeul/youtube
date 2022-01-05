import express from "express";
import morgan from "morgan";
const PORT = 4000;
const app = express();
const logger = morgan("dev");

/**Middle ware */
const routerLogger = (req, res, next) => {
  console.log(`PATH ${req.path}`);
  next();
};
const methodLogger = (req, res, next) => {
  console.log(`METHOD ${req.method}`);
  next();
};
/** application (get,request)설정 */
const home = (req, res) => {
  console.log("I will respond.");
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("Login");
};
app.use(logger);
app.get("/", home);
app.get("/login", login);
/** 외부 접속 Listen*/
const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}👂`);
app.listen(PORT, handleListening);
