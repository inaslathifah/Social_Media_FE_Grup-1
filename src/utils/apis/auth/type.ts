import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Username / Email / No.HP is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  fullname: z.string().min(1, { message: "fullname is required" }),
  username: z
    .string()
    .min(5, "Username must have atleast 5 characters")
    .regex(/[.\_]/, "Username must contain a dot (.) or an underscore(_)")
    .regex(/\d/, "Username must have atleast a number"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(8, { message: "Minimum password length is 8" }),
  handphone: z.string().min(11, { message: "Minimum no handphone length is 11" }),
});

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
