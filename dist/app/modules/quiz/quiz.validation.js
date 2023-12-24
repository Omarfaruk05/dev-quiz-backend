"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizValidation = void 0;
const zod_1 = require("zod");
const createQuizZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required." }),
        logo: zod_1.z.string({ required_error: "Logo is required." }),
    }),
});
const updateQuizZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        logo: zod_1.z.string().optional(),
    }),
});
exports.QuizValidation = {
    createQuizZodSchema,
    updateQuizZodSchema,
};
