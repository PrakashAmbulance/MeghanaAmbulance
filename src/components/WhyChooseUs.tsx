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
  },
  {
    icon: ShieldIcon,
    title: "Experienced Drivers",
    desc: "Ambulances are operated by experienced drivers familiar with Bangalore's roads.",
  },
  {
    icon: StaffIcon,
    title: "Staff Nurse Support",
    desc: "Staff nurse support is available to assist during patient transportation.",
  },
  {
    icon: MapPinIcon,
    title: "Bangalore-Wide Service",
    desc: "Coverage across Bangalore, including a set of selected service areas.",
  },
  {
    icon: BuildingIcon,
    title: "Hospital Transfer Support",
    desc: "Support for hospital-to-hospital and hospital-to-home transfers.",
  },
  {
    icon: PhoneIcon,
    title: "Direct Phone Assistance",
    desc: "Speak directly with our team by phone for any ambulance requirement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-950 py-16 text-white sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Why Choose Meghana Ambulance Service
          </h2>
          <p className="mt-3 text-white/70">
            Dependable ambulance support built around direct communication,
            experienced staff and coordinated patient transportation.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p.icon className="h-7 w-7 text-medblue-400" />
              <h3 className="mt-3 text-base font-bold">{p.title}</h3>
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
