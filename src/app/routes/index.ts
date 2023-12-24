import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { QuizRoute } from "../modules/quiz/quiz.route";
import { QuestionRoute } from "../modules/question/question.route";
import { ScoreRoute } from "../modules/scor/scor.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/quizs",
    route: QuizRoute,
  },
  {
    path: "/questions",
    route: QuestionRoute,
  },
  {
    path: "/scores",
    route: ScoreRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
