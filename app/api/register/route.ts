import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const { name, mobile, email } = await req.json();

    if (!name || !mobile) {
      return NextResponse.json(
        { error: "Name and mobile number are required." },
        { status: 400 }
      );
    }

    // Basic sanity checks
    const mobileDigits = String(mobile).replace(/\D/g, "");
    if (mobileDigits.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    await appendRow(
      "Registrations",
      ["Timestamp", "Name", "Mobile", "Email"],
      [new Date().toISOString(), name, mobileDigits, email || ""]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { error: "Could not save registration. Please try again." },
      { status: 500 }
    );
  }
}
