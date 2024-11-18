import { Request, Response } from "express";
import User from "../models/user";
import Announcement from "../models/announcement";

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await User.findById({ _id: req.userId });
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(currentUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Getting User" });
  }
};

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating User" });
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, yearOfPassing, Program } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.yearOfPassing = yearOfPassing;
    user.Program = Program;


    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Updating User" });
  }
};

const getAnnouncements = async (req: Request, res:Response) => {
  try {
    const allAnnouncement = await Announcement.find({}).sort( { 'timestamp': -1 } );
    console.log(allAnnouncement);
    return res.json(allAnnouncement);
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error Loading the Announcement Page" });
  }
};

export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
  getAnnouncements,
};
