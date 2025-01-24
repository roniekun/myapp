import { z } from 'zod';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }) // At least 1 character
    .max(100, { message: "Name must be less than 100 characters" }), // Max 100 characters
  email: z
    .string()
    .email({ message: "Invalid email address" }), // Valid email format
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }) // At least 10 characters
    .max(1000, { message: "Message must be less than 1000 characters" }) // Max 1000 characters
});

export default contactFormSchema;