import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";
import { QuestionController } from "./question.controller";
import validateRequest from "../../middlewares/validateRequest";
import { QuestionValidation } from "./question.validation";

const router = express.Router();

router.get("/", QuestionController.getQuestions);

router.get("/:id", QuestionController.getSingleQuestion);

router.post(
  "/",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(QuestionValidation.createQuestionZodSchema),
  QuestionController.createQuestion
);

router.patch(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(QuestionValidation.updateQuestionZodSchema),
  QuestionController.updateSingleQuestion
);

router.delete(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  QuestionController.deleteSingleQuestion
);

export const QuestionRoute = router;
