import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .max(30, "First name must be at most 30 characters long")
      .regex(/^[a-zA-Z]+$/, "First name can only contain letters"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .max(30, "Last name must be at most 30 characters long")
      .regex(/^[a-zA-Z]+$/, "Last name can only contain letters"),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),

    email: z.string().email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),

    confirmPassword: z.string(),

    age: z
      .number()
      .optional()
      .refine((age) => age === undefined || age >= 18, {
        message: "You must be at least 18 years old",
      }),

    acceptPolicy: z.boolean().refine((value) => value === true, {
      message: "You must accept the policy to register",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const registerResolver = zodResolver(registerSchema);
