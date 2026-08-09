import { doctor } from "@/lib/config";
import HeartbeatDivider from "./HeartbeatDivider";
import DoctorPhoto from "./DoctorPhoto";

export default function DoctorProfile() {
  return (
    <section id="profile" className="max-w-5xl mx-auto px-5 py-16">
      <p className="eyebrow text-teal">About</p>
      <h2 className="font-display text-3xl mt-2 mb-8">Meet {doctor.name}</h2>

      <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
        <div className="w-48 h-48 rounded-2xl bg-navy/5 border border-line overflow-hidden">
          <DoctorPhoto src={doctor.photoUrl} alt={doctor.name} />
        </div>
        <div>
          <h3 className="font-display text-xl italic text-teal">{doctor.credentials}</h3>
          <p className="text-navy/60 mt-1">{doctor.clinic}</p>
          <p className="mt-4 text-navy/80 leading-relaxed whitespace-pre-line">
            {doctor.bio}
          </p>
        </div>
      </div>
      <HeartbeatDivider className="mt-14 opacity-30" />
    </section>
  );
}
