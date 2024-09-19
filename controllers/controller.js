import  Question  from "../models/question.schema.js";
import  Result  from "../models/result.schema.js";
import questions, {answers} from "../database/data.js"


export async function getQuestions(req, res) {
  try{
    const questions = await Question.find();
    res.status(200).json(questions);
  }
  catch(error){
    res.status(404).json({ message: error.message });
  }
} 



export async function postQuestions(req, res) {
  try {
    const data = await Question.insertMany({questions, answers});
    res.status(200).json({ msg: "Questions added successfully"});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


export async function getResult(req, res) {
  try {
    const result = await Result.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
    
  }
}


export async function postResult(req, res) {
  try {
    const { username, results, points } = req.body;

    // Check if required fields are missing
    if (!username || !results) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    const data = await Result.create({ username, results, points });
    res.status(200).json({ msg: "Result submitted successfully", data });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}