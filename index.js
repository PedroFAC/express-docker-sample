import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/hello", (_req, res) => {
  res.json({ hello: "hello world" });
});

app.listen(8080, () => {
  console.log("Server is Running!");
});
