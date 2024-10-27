import { Request, Response } from "express";
import Material from "../models/material";
import User from "../models/user";

const createNewMaterial = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findById({ _id: req.userId });
    const { courseCode, name, description, category } = req.body;
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const material = req.file?.filename;
    const newMaterial = new Material({
      name,
      description,
      material,
      courseCode,
      category,
      user: currentUser.email,
    });
    await newMaterial.save();
    console.log(req.file?.filename);
    res.status(201).json(newMaterial);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const viewMyUploadedMaterials = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findById({ _id: req.userId });
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const materials = await Material.find({user: currentUser.email});
    // console.log(materials);
    res.status(200).json(materials);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const viewAllPendingMaterials = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findById({ _id: req.userId });
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const materials = await Material.find({ status: "Pending" });
    res.status(200).json(materials);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const changeStatusOfUploadedMaterial = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findById({ _id: req.userId });
    const { id, status } = req.body;
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(status);
    console.log(req.body);
    const material = await Material.findById(id);
    console.log(material);
    if (!material) {
      return res.status(404).json({ message: "Material Not Found" });
    }
    material.status = status;
    material.save();
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  createNewMaterial,
  viewMyUploadedMaterials,
  changeStatusOfUploadedMaterial,
  viewAllPendingMaterials
};
