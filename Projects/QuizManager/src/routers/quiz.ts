import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getQuiz,
  publishQuiz,
  updateQuiz,
} from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();

// create quiz
router.post("/", isAuthenticated, createQuiz);

//get quiz
router.get("/:quizId", isAuthenticated, getQuiz);

//update quiz
router.put("/", isAuthenticated, updateQuiz);

//delette quiz
router.delete("/:quizId", isAuthenticated, deleteQuiz);

// publish quiz
router.patch("/publish", isAuthenticated, publishQuiz);
export default router;