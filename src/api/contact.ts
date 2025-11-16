// src/api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Ensure your environment variable is defined
const resend = new Resend(process.env.RESEND_API_KEY!);

interface ContactFormBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body as ContactFormBody;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "andrew.zhang9799@gmail.com",
      subject: `Personal Portfolio: New Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    // Type-safe error logging
    console.error("Resend error:", error);
    return res.status(500).json({ error: (error as Error).message });
  }
}