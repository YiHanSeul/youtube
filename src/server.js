import express from "express";
const PORT = 4000;
const app = express();

/** application (get,request)설정 */

const handleHome = (req, res) => {
  return res.send("<h1>I still study</h1>");
};
const handleLogin = (req, res) => {
  return res.send({ message: "handle login page" });
};
app.get("/", handleHome);
app.get("/login", handleLogin);

/** 외부 접속 Listen*/
const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}👂`);
app.listen(PORT, handleListening);
