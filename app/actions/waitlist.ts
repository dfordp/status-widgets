"use server";

import { db } from "@/lib/db";
import { waitlistEntries } from "@/lib/db/schema";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100).optional(),
});

export type WaitlistResult =
  | { success: true }
  | { success: false; error: string };

export async function joinWaitlist(
  formData: FormData
): Promise<WaitlistResult> {
  const parsed = waitlistSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
  });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message };
  }

  try {
    await db.insert(waitlistEntries).values(parsed.data);
    return { success: true };
  } catch (err) {
    const message = String(err);
    if (message.includes("unique") || message.includes("duplicate")) {
      return {
        success: false,
        error: "This email is already on the waitlist.",
      };
    }
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
