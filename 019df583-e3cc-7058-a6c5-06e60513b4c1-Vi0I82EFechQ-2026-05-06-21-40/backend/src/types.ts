import { z } from "zod";

export const RegistrationSchema = z.object({
  parentName: z.string().min(2, "Parent name required"),
  childName: z.string().min(2, "Child name required"),
  childAge: z.coerce.number().int().min(4).max(18),
  sport: z.enum(["Basketball", "Soccer", "Football", "Baseball", "Multi-Sport"]),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  emergencyContact: z.string().min(2, "Emergency contact required"),
  medicalNotes: z.string().default(""),
  tshirtSize: z.enum(["YXS", "YS", "YM", "YL", "AS", "AM", "AL", "AXL"]),
  consentSigned: z.literal(true, { errorMap: () => ({ message: "You must agree to the waiver" }) }),
});

export const ContactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type Registration = z.infer<typeof RegistrationSchema>;
export type ContactMessage = z.infer<typeof ContactSchema>;
