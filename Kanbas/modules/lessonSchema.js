import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    module: String
  }
);

export default lessonSchema;
