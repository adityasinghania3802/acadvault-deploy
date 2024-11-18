import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  Uploader: {
    type: String,
  }
},{
    timestamps: true,
});

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;
