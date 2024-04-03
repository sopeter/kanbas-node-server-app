import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("CourseSchema", schema);
export default model;
