"use client";

import { useState, FormEvent } from "react";
import HeartbeatDivider from "./HeartbeatDivider";

type Status = "idle" | "submitting" | "success" | "error";

export default function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      mobile: (form.elements.namedItem("mobile") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  return (
    <section id="register" className="max-w-5xl mx-auto px-5 py-16">
      <p className="eyebrow text-teal">Step 1</p>
      <h2 className="font-display text-3xl mt-2 mb-6">Register with us</h2>

      {status === "success" ? (
        <div className="bg-teal/10 border border-teal/30 rounded-xl p-6 text-teal-light text-navy">
          <p className="font-medium">Thank you — you're registered.</p>
          <p className="text-sm mt-1 text-navy/70">
            Our team will reach out on the number you provided.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full border border-line rounded-lg px-4 py-3 bg-white focus:outline-none"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium mb-1">
              Mobile number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              className="w-full border border-line rounded-lg px-4 py-3 bg-white focus:outline-none"
              placeholder="10-digit mobile number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-navy/50 font-normal">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-line rounded-lg px-4 py-3 bg-white focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {status === "error" && (
            <p className="text-coral text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 bg-navy text-ivory px-6 py-3 rounded-full font-medium hover:bg-teal transition-colors disabled:opacity-60 w-fit"
          >
            {status === "submitting" ? "Submitting..." : "Complete Registration"}
          </button>
        </form>
      )}
      <HeartbeatDivider className="mt-14 opacity-30" />
    </section>
  );
}
