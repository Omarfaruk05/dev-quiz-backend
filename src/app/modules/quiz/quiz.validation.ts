import { Role } from "@prisma/client";
import { z } from "zod";

const createQuizZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required." }),
    logo: z.string({ required_error: "Logo is required." }),
  }),
});
const updateQuizZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    logo: z.string().optional(),
  }),
});

export const QuizValidation = {
  createQuizZodSchema,
  updateQuizZodSchema,
};
