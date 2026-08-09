import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const { patientName, referringDoctor, reason, notes } = await req.json();

    if (!patientName || !reason) {
      return NextResponse.json(
        { error: "Patient name and reason for referral are required." },
        { status: 400 }
      );
    }

    await appendRow(
      "Referrals",
      ["Timestamp", "Patient Name", "Referring Doctor", "Reason", "Notes"],
      [
        new Date().toISOString(),
        patientName,
        referringDoctor || "",
        reason,
        notes || "",
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Referral error:", err);
    return NextResponse.json(
      { error: "Could not save referral. Please try again." },
      { status: 500 }
    );
  }
}
