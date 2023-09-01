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
    contactNo: z.string({ required_error: "Contact number is required." }),
    address: z.string({ required_error: "Address is required." }),
    profileImg: z
      .string({ required_error: "Profile image link is required." })
      .url(),
  }),
});

export const AuthValidation = {
  createUserZodSchema,
};
