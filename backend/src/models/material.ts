import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  material: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
});

const Material = mongoose.model("Material", materialSchema);
export default Material;
