import { jwtCheck, jwtParse } from "../middlewares/auth";
import CourseController from "../controllers/CourseController";
import express from "express";

const router = express.Router();

router.get("/",jwtCheck,jwtParse,CourseController.getAllCourse);
router.post("/new", jwtCheck, CourseController.createNewCourse);
router.get("/:courseCode",jwtCheck,jwtParse,CourseController.getAllMaterial)

export default router;
