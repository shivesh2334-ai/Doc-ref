import { doctor } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory/60 text-sm">
      <div className="max-w-5xl mx-auto px-5 py-8 flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {doctor.name} · {doctor.clinic}</p>
        <a
          href={`https://wa.me/${doctor.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ivory transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </footer>
  );
}
