import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";
import { QuizController } from "./quiz.controller";
import { QuizValidation } from "./quiz.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(QuizValidation.createQuizZodSchema),
  QuizController.createQuiz
);

router.get("/", QuizController.getQuizzes);

router.get("/:id", QuizController.getSingleQuiz);

router.patch(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(QuizValidation.updateQuizZodSchema),
  QuizController.updateSingleQuiz
);

router.delete("/:id", auth(ENUM_ROLE.ADMIN), QuizController.deleteSingleQuiz);

export const QuizRoute = router;
