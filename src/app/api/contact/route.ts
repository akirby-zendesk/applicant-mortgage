import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required" },
      { status: 400 }
    );
  }

  // TODO: Add email notification (SendGrid/Resend) when Dan provides credentials
  console.log("Contact form submission:", { name, email, phone, message });

  return NextResponse.json({ success: true });
}
