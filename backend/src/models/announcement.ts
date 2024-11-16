import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  materialID: {
    type: String,
    required: true,
    unique: true,
  },
},{
    timestamps: true,
});

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;
