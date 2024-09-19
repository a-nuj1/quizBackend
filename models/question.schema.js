import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questions:{
        type: Array,
        default: []
    },
    answers:{
        type: Array,
        default: []
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const Question = mongoose.model("Question", questionSchema);

export default Question;