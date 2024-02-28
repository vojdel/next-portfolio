import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTamplate";
import type { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "vasquezpinedaj@gmail.com";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  /*const { email, subject, message } = await req.json();
  console.log(email, subject, message)*/ try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
