"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreValidation = void 0;
const zod_1 = require("zod");
const createScoreZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        score: zod_1.z.number({ required_error: "Score is required." }),
        userId: zod_1.z.string({ required_error: "User ID is required." }),
        quizId: zod_1.z.string({ required_error: "Quiz ID is required." }),
    }),
});
const updateScoreZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        score: zod_1.z.number().optional(),
        userId: zod_1.z.string().optional(),
        quizId: zod_1.z.string().optional(),
    }),
});
exports.ScoreValidation = {
    createScoreZodSchema,
    updateScoreZodSchema,
};
