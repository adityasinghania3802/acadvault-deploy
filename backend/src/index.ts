import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";
import CourseRoute from "./routes/CourseRoute";
import MaterialRoute from "./routes/MaterialRoute";
import { jwtCheck, jwtParse } from "./middlewares/auth";
const path = require("path");

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to Database"));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello! " });
});

app.use("/api/my/user", MyUserRoute);

app.use("/api/course", CourseRoute);

app.use("/api/material",jwtCheck,jwtParse, MaterialRoute);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
