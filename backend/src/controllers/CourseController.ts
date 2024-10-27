import { Request, Response } from "express";
import Course from "../models/course";
import Material from "../models/material";
import User from "../models/user";

const getAllCourse = async (req: Request, res: Response) => {
  try {
    const allCourse = await Course.find({});
    // console.log(allCourse);
    return res.json(allCourse);
  } catch (error) {
    return res.status(404).send(error);
  }
}

const createNewCourse = async (req: Request, res: Response) => {
  try {
    const { code, name, description } = req.body;
    const course = await Course.find({ code: code });
    if (course.length !== 0) {
      return res.status(400).send("Course Already exists in the database");
    }
    const category = code.substring(0, 2);
    const newCourse = new Course(req.body);
    newCourse.category = category;
    await newCourse.save();
    res.status(201).json(newCourse.toObject());
  } catch (error) {
    return res.status(404).send(error);
  }
};

const getAllMaterial = async (req:Request, res:Response) => {
  try{
    const {courseCode} = req.params;
    const currentUser = await User.findById({ _id: req.userId });
    if(!currentUser) {
      return res.status(401).json({message: "Unable to find logged in user"});
    }
    const material = await Material.find({courseCode: courseCode, status: "Accepted"});
    if(!material) {
      return res.json({message: "No Material available"});
    }
    console.log(material);
    return res.status(200).json(material);
  } catch (error) {
    return res.status(404).send(error);
  }
}

export default {
  createNewCourse,
  getAllCourse,
  getAllMaterial,
};
