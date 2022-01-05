import express from "express";
const PORT = 4000;
const app = express();

/**Middle ware */
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

/** application (get,request)설정 */
const handleHome = (req, res) => {
  return res.send("<h1>This is middlewares</h1>");
};

app.get("/", logger, handleHome);

/** 외부 접속 Listen*/
const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}👂`);
app.listen(PORT, handleListening);
