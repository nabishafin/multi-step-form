import { z } from "zod";

// Personal Information Schema
export const personalInfoSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
});

// Address Schema
export const addressSchema = z.object({
    streetAddress: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    zipCode: z
        .string()
        .min(5, "Zip code must be at least 5 digits")
        .regex(/^\d+$/, "Zip code must only contain numbers"),
});

// Account Setup Schema
export const accountSchema = z
    .object({
        username: z.string().min(4, "Username must be at least 4 characters"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z
            .string()
            .min(6, "Confirm password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });
