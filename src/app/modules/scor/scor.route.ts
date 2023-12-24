import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";

import validateRequest from "../../middlewares/validateRequest";
import { ScoreController } from "./scor.controller";
import { ScoreValidation } from "./scor.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(ScoreValidation.createScoreZodSchema),
  ScoreController.createScore
);

router.get("/", ScoreController.getScores);

router.get("/:id", ScoreController.getScoreById);

router.patch(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(ScoreValidation.updateScoreZodSchema),
  ScoreController.updateScore
);

router.delete("/:id", auth(ENUM_ROLE.ADMIN), ScoreController.deleteScore);

export const ScoreRoute = router;
