import { Status } from "@prisma/client";
import { z } from "zod";

const orderedBookSchema = z.object({
  bookId: z.string(),
  quantity: z.number().int().positive(),
});

const createOrderZodSchema = z.object({
  body: z.object({
    orderedBooks: z.array(orderedBookSchema),
    status: z
      .enum([...Object.values(Status)] as [string, ...string[]])
      .optional(),
  }),
});
