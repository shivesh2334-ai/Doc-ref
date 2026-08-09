import { procedures } from "@/lib/config";
import HeartbeatDivider from "./HeartbeatDivider";

export default function Procedures() {
  return (
    <section id="procedures" className="max-w-5xl mx-auto px-5 py-16">
      <p className="eyebrow text-teal">Services</p>
      <h2 className="font-display text-3xl mt-2 mb-8">Procedures performed</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {procedures.map((p) => (
          <div
            key={p.name}
            className="border border-line rounded-xl p-5 bg-white hover:border-teal/50 transition-colors"
          >
            <h3 className="font-semibold text-navy">{p.name}</h3>
            <p className="text-sm text-navy/60 mt-1">{p.description}</p>
          </div>
        ))}
      </div>
      <HeartbeatDivider className="mt-14 opacity-30" />
    </section>
  );
}
