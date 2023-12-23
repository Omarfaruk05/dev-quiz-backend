import { z } from "zod";

const createQuestionZodSchema = z.object({
  body: z.object({
    question: z.string({ required_error: "Question is required." }),
    correctAnswer: z.string({ required_error: "Correct answer is required." }),
    options: z.array(z.string()).min(2, "At least two options are required."),
    quizId: z.string({ required_error: "Quiz ID is required." }),
  }),
});

const updateQuestionZodSchema = z.object({
  body: z.object({
    question: z.string().optional(),
    correctAnswer: z.string().optional(),
    options: z
      .array(z.string())
      .min(2, "At least two options are required.")
      .optional(),
    quizId: z.string().optional(),
  }),
});

export const QuestionValidation = {
  createQuestionZodSchema,
  updateQuestionZodSchema,
};
