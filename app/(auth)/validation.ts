import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email address") 
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email must not exceed 50 characters"), 
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") 
    .max(32, "Password must not exceed 32 characters") 
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter") 
    .regex(/[0-9]/, "Password must contain at least one number") 
    .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)") 
    .regex(
      /^[A-Za-z\d@$!%*?&]+$/,
      "Password must not contain spaces or invalid characters"
    ), 
});

export type SignInFormData = z.infer<typeof signInSchema>;
