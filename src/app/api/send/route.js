import Email from "../../../components/email/index"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const { email } = await request.json()

  try {
    const data = await resend.emails.send({
      from: "Redouan <contact@chred.me>",
      to: email,
      subject: "Hello jack",
      react: Email(),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
