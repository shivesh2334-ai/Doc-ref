import { doctor } from "@/lib/config";
import HeartbeatDivider from "./HeartbeatDivider";

export default function Hero() {
  return (
    <section id="top" className="bg-navy text-ivory">
      <div className="max-w-5xl mx-auto px-5 pt-16 pb-10">
        <p className="eyebrow text-teal-light">Welcome to the Program</p>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[1.05]">
          Cardiac care that <span className="italic text-teal-light">meets you</span> where
          you are.
        </h1>
        <p className="mt-5 max-w-xl text-ivory/80 text-lg">
          {doctor.tagline} Register below, browse the procedures on offer, or
          send a referral straight to {doctor.name.split(" ").slice(-1)}'s desk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#register"
            className="bg-teal text-ivory px-6 py-3 rounded-full font-medium hover:bg-teal-light transition-colors"
          >
            Register Now
          </a>
          <a
            href="#referral"
            className="border border-ivory/30 px-6 py-3 rounded-full font-medium hover:bg-ivory/10 transition-colors"
          >
            Refer a Patient
          </a>
        </div>
      </div>
      <HeartbeatDivider color="#2A9D93" className="opacity-70" />
    </section>
  );
}
