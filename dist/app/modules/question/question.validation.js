"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionValidation = void 0;
const zod_1 = require("zod");
const createQuestionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string({ required_error: "Question is required." }),
        correctAnswer: zod_1.z.string({ required_error: "Correct answer is required." }),
        options: zod_1.z.array(zod_1.z.string()).min(2, "At least two options are required."),
        quizId: zod_1.z.string({ required_error: "Quiz ID is required." }),
    }),
});
const updateQuestionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string().optional(),
        correctAnswer: zod_1.z.string().optional(),
        options: zod_1.z
            .array(zod_1.z.string())
            .min(2, "At least two options are required.")
            .optional(),
        quizId: zod_1.z.string().optional(),
    }),
});
exports.QuestionValidation = {
    createQuestionZodSchema,
    updateQuestionZodSchema,
};
