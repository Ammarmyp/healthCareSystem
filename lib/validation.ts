import { z } from "zod";

export const PatientFormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, { message: "email please" }),
  phoneNumber: z.string().optional(),
});