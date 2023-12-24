import { z } from "zod";

const createScoreZodSchema = z.object({
  body: z.object({
    score: z.number({ required_error: "Score is required." }),
    userId: z.string({ required_error: "User ID is required." }),
    quizId: z.string({ required_error: "Quiz ID is required." }),
  }),
});

const updateScoreZodSchema = z.object({
  body: z.object({
    score: z.number().optional(),
    userId: z.string().optional(),
    quizId: z.string().optional(),
  }),
});

export const ScoreValidation = {
  createScoreZodSchema,
  updateScoreZodSchema,
};
