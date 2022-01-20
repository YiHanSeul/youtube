import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";
//init.js파일은 필요한 모든것들을 import 하는 역할.
const PORT = 4000;
/** 외부 접속 Listen application 작동*/
const handleListening = () =>
  console.log(`📌Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
