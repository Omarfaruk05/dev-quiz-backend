import { Role } from "@prisma/client";
import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required." }),
    email: z.string({ required_error: "Email is required" }).email(),
    password: z.string({ required_error: "Password is required." }),
    role: z.enum([...Object.values(Role)] as [string, ...string[]], {
      required_error: "Role must be admin or customer.",
    }),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }).email(),
    password: z.string({ required_error: "Password is required" }),
  }),
});
export const AuthValidation = {
  createUserZodSchema,
  loginUserZodSchema,
};
