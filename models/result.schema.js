import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    results: {
      type: Array,
      default: [],
    },
    points: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });
  
  const Result = mongoose.model("Result", resultSchema);
  
  export default Result;