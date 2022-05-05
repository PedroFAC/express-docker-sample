import express from "express";
import cors from "cors";
import sequelize from "./config/dbConnection.js";
import User from "./models/user.cjs";
import { DataTypes } from "sequelize";

const app = express();
const user = User(sequelize, DataTypes);

async function authDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

app.use(cors());
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.json({ hello: "hello world" });
});

app.get("/users", async (_, res) => {
  const users = await user.findAll();
  res.json({ length: users.length, users });
});

app.post("/user", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = await user.create({
    firstName,
    lastName,
    email,
  });
  res.json(newUser);
});

app.listen(8080, () => {
  authDB();
  sequelize.sync();
  console.log("Server is Running!");
});
