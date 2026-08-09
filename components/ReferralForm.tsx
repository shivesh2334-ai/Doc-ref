"use client";

import { useState, FormEvent } from "react";
import { doctor, referralReasons } from "@/lib/config";
import { MessageCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ReferralForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const patientName = (form.elements.namedItem("patientName") as HTMLInputElement).value;
    const referringDoctor = (form.elements.namedItem("referringDoctor") as HTMLInputElement).value;
    const reason = (form.elements.namedItem("reason") as HTMLSelectElement).value;
    const notes = (form.elements.namedItem("notes") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientName, referringDoctor, reason, notes }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");

      // Build the WhatsApp message and hand off to the doctor's WhatsApp
      const lines = [
        `Referral: ${patientName}`,
        referringDoctor ? `Referring doctor: ${referringDoctor}` : null,
        `Reason: ${reason}`,
        notes ? `Notes: ${notes}` : null,
      ].filter(Boolean);
      const message = encodeURIComponent(lines.join("\n"));
      const waUrl = `https://wa.me/${doctor.whatsappNumber}?text=${message}`;

      setStatus("success");
      form.reset();
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="referral" className="bg-navy text-ivory">
      <div className="max-w-5xl mx-auto px-5 py-16">
        <p className="eyebrow text-teal-light">For Referring Physicians</p>
        <h2 className="font-display text-3xl mt-2 mb-2">Refer a patient</h2>
        <p className="text-ivory/70 max-w-lg mb-8">
          Fill in the details below — we'll log the referral and open
          WhatsApp so you can send it directly to {doctor.name}.
        </p>

        {status === "success" ? (
          <div className="bg-teal/15 border border-teal/40 rounded-xl p-6 max-w-md">
            <p className="font-medium">Referral logged.</p>
            <p className="text-sm mt-1 text-ivory/70">
              A WhatsApp tab should have opened with the details pre-filled —
              just hit send.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium mb-1">
                Patient name
              </label>
              <input
                id="patientName"
                name="patientName"
                required
                className="w-full border border-ivory/20 rounded-lg px-4 py-3 bg-navy-light/40 focus:outline-none placeholder:text-ivory/40"
                placeholder="Patient's full name"
              />
            </div>
            <div>
              <label htmlFor="referringDoctor" className="block text-sm font-medium mb-1">
                Your name / clinic{" "}
                <span className="text-ivory/50 font-normal">(optional)</span>
              </label>
              <input
                id="referringDoctor"
                name="referringDoctor"
                className="w-full border border-ivory/20 rounded-lg px-4 py-3 bg-navy-light/40 focus:outline-none placeholder:text-ivory/40"
                placeholder="Dr. / Clinic name"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium mb-1">
                Reason for referral
              </label>
              <select
                id="reason"
                name="reason"
                required
                defaultValue=""
                className="w-full border border-ivory/20 rounded-lg px-4 py-3 bg-navy-light/40 focus:outline-none"
              >
                <option value="" disabled>
                  Select a reason
                </option>
                {referralReasons.map((r) => (
                  <option key={r} value={r} className="text-navy">
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Additional notes{" "}
                <span className="text-ivory/50 font-normal">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className="w-full border border-ivory/20 rounded-lg px-4 py-3 bg-navy-light/40 focus:outline-none placeholder:text-ivory/40"
                placeholder="Relevant history, urgency, etc."
              />
            </div>

            {status === "error" && (
              <p className="text-coral text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 flex items-center justify-center gap-2 bg-teal text-ivory px-6 py-3 rounded-full font-medium hover:bg-teal-light transition-colors disabled:opacity-60 w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              {status === "submitting" ? "Sending..." : "Send Referral via WhatsApp"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
