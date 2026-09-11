import {
  ClockIcon,
  StaffIcon,
  ShieldIcon,
  MapPinIcon,
  PhoneIcon,
  BuildingIcon,
} from "@/components/icons";

const points = [
  {
    icon: ClockIcon,
    title: "24/7 Ambulance Assistance",
    desc: "Our team is reachable around the clock for ambulance requirements.",
    accent: "bg-emergency-500/15 text-emergency-400",
  },
  {
    icon: ShieldIcon,
    title: "Experienced Drivers",
    desc: "Ambulances are operated by experienced drivers familiar with Bangalore's roads.",
    accent: "bg-emerald-500/15 text-emerald-400",
  },
  {
    icon: StaffIcon,
    title: "Staff Nurse Support",
    desc: "Staff nurse support is available to assist during patient transportation.",
    accent: "bg-rose-500/15 text-rose-400",
  },
  {
    icon: MapPinIcon,
    title: "Bangalore-Wide Service",
    desc: "Coverage across Bangalore, including a set of selected service areas.",
    accent: "bg-amber-500/15 text-amber-400",
  },
  {
    icon: BuildingIcon,
    title: "Hospital Transfer Support",
    desc: "Support for hospital-to-hospital and hospital-to-home transfers.",
    accent: "bg-sky-500/15 text-sky-400",
  },
  {
    icon: PhoneIcon,
    title: "Direct Phone Assistance",
    desc: "Speak directly with our team by phone for any ambulance requirement.",
    accent: "bg-violet-500/15 text-violet-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-950 py-16 text-white sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            What You Get With Every Ambulance We Send
          </h2>
          <p className="mt-3 text-white/70">
            No surprises when it matters most — here's exactly what's behind
            every call to Meghana Ambulance Service.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[.08]"
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.accent}`}>
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
