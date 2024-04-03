import mongoose from "mongoose";
import lessonSchema from "./lessonSchema.js";


const moduleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    course: String,
    lessons: [lessonSchema]
  },
  { collection: "modules" }
);

export default moduleSchema;
