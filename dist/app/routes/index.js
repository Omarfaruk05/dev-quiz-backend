"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const quiz_route_1 = require("../modules/quiz/quiz.route");
const question_route_1 = require("../modules/question/question.route");
const scor_route_1 = require("../modules/scor/scor.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/quizs",
        route: quiz_route_1.QuizRoute,
    },
    {
        path: "/questions",
        route: question_route_1.QuestionRoute,
    },
    {
        path: "/scores",
        route: scor_route_1.ScoreRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
