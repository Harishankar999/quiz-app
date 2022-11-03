const express = require("express");
const cors = require("cors");
const QuizModel = require("./model");
const connection = require("./config");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/quiz", async (req, res) => {
  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
  } = req.body;
  const quiz = new QuizModel({
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
  });

  await quiz.save();
  return res.send("Quiz added Successfull");
});

app.get("/quiz", async (req, res) => {
  let { category, difficulty, limit } = req.query;
  if (category && difficulty && limit) {
    let allQuiz = await QuizModel.find({
      $and: [{ category: category }, { difficulty: difficulty }],
    }).limit(limit);
    return res.send(allQuiz);
  } else if (category) {
    let allQuiz = await QuizModel.find({ category: category });
    return res.send(allQuiz);
  } else {
    let allQuiz = await QuizModel.find();
    return res.send(allQuiz);
  }
});
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Server is Connected");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is Running on PORT No 8080");
});
