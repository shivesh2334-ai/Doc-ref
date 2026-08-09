"use client";

import { doctor } from "@/lib/config";
import { Activity } from "lucide-react";

const links = [
  { href: "#register", label: "Register" },
  { href: "#profile", label: "Profile" },
  { href: "#procedures", label: "Procedures" },
  { href: "#blog", label: "Blog" },
  { href: "#referral", label: "Refer a Patient" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur border-b border-line">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-teal" strokeWidth={2.5} />
          <span className="font-display italic text-lg text-navy">{doctor.name}</span>
        </a>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-teal transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#referral"
          className="text-sm bg-navy text-ivory px-4 py-2 rounded-full hover:bg-teal transition-colors"
        >
          Refer a Patient
        </a>
      </nav>
    </header>
  );
}
