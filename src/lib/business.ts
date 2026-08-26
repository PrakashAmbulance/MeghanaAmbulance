// ---------------------------------------------------------------------------
// Central business configuration for Meghana Ambulance Service.
//
// Every piece of business information used across the site (phone numbers,
// service list, service areas, WhatsApp number, etc.) lives here so the
// client can update the site by editing a single file instead of hunting
// through dozens of components.
//
// Fields marked PLACEHOLDER must be confirmed/replaced by the client before
// launch. Nothing here should be treated as a verified medical, legal or
// statistical claim until the client supplies it.
// ---------------------------------------------------------------------------

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  bullets: string[];
  /** Show an "availability may vary" disclaimer on this service. */
  subjectToAvailability: boolean;
  icon: ServiceIconName;
}

export type ServiceIconName =
  | "emergency"
  | "icu"
  | "nicu"
  | "picu"
  | "ccu"
  | "transfer"
  | "longDistance"
  | "patient";

export const business = {
  name: "Meghana Ambulance Service",
  legalName: "Meghana Ambulance Service",
  tagline: "24/7 Ambulance Service in Bangalore",
  shortDescription:
    "Reliable ambulance transportation with experienced drivers and trained staff support for emergency, hospital transfer and long-distance patient journeys.",

  // ---- Contact -------------------------------------------------------
  phone: "8496840543",
  phoneDisplay: "84968 40543",
  phoneIntl: "+918496840543",

  secondaryPhone: "9353120746",
  secondaryPhoneDisplay: "93531 20746",
  secondaryPhoneIntl: "+919353120746",

  // WhatsApp number used to build wa.me links across the site.
  whatsappNumber: "8496840543",
  whatsappNumberIntl: "918496840543",
  whatsappDefaultMessage:
    "Hello Meghana Ambulance Service, I need ambulance assistance.",

  email: "", // PLACEHOLDER - add once client confirms a business email

  // ---- Location --------------------------------------------------------
  city: "Bangalore",
  state: "Karnataka",
  country: "India",
  countryCode: "IN",
  region: "Bangalore, Karnataka, India",
  // No street address was supplied by the client. Do not fabricate one.
  streetAddress: "", // PLACEHOLDER - add once client confirms
  postalCode: "", // PLACEHOLDER

  // ---- Site metadata -----------------------------------------------------
  siteUrl: "https://www.meghanaambulance.in", // PLACEHOLDER - update to the real production domain
  logoPath: "/images/logo.svg",

  // Availability. Client has stated 24/7 assistance; no specific opening
  // hours schema is published because none was supplied.
  availability: "24/7",

  // Technology feature the client asked to be mentioned, without implying
  // capabilities (telemedicine, live GPS, IoT monitoring) that were not
  // provided.
  technologyFeatures: ["5G connected ambulance fleet"],
} as const;

export const services: Service[] = [
  {
    slug: "emergency-ambulance",
    name: "Emergency Ambulance",
    shortName: "Emergency",
    summary: "Urgent patient transportation for emergency situations.",
    description:
      "For situations that need fast, dependable ambulance support, our team coordinates urgent patient transportation with experienced drivers and staff nurse assistance.",
    bullets: [
      "Direct phone assistance, day or night",
      "Experienced ambulance drivers",
      "Staff nurse support",
      "Coordinated hospital drop-off",
    ],
    subjectToAvailability: false,
    icon: "emergency",
  },
  {
    slug: "icu-ambulance",
    name: "ICU Ambulance",
    shortName: "ICU",
    summary:
      "Advanced medical transport support, subject to vehicle and equipment availability.",
    description:
      "ICU ambulance support is intended for patients who require a higher level of transport support. Availability depends on the vehicle and equipment on hand at the time of the request — please call to confirm before booking.",
    bullets: [
      "Subject to vehicle/equipment availability",
      "Coordinated with staff nurse support",
      "Please call ahead to confirm suitability for your patient",
    ],
    subjectToAvailability: true,
    icon: "icu",
  },
  {
    slug: "nicu-ambulance",
    name: "NICU Ambulance",
    shortName: "NICU",
    summary:
      "Neonatal patient transportation, subject to vehicle and equipment availability.",
    description:
      "NICU ambulance support is intended for neonatal transportation needs. Availability depends on the vehicle and equipment on hand — please call our team to discuss your specific requirement before booking.",
    bullets: [
      "Subject to vehicle/equipment availability",
      "Please call to confirm suitability before booking",
    ],
    subjectToAvailability: true,
    icon: "nicu",
  },
  {
    slug: "picu-ambulance",
    name: "PICU Ambulance",
    shortName: "PICU",
    summary:
      "Pediatric critical-care transportation, subject to vehicle and equipment availability.",
    description:
      "PICU ambulance support is intended for pediatric critical-care transportation needs. Availability depends on the vehicle and equipment on hand — please call our team to confirm before booking.",
    bullets: [
      "Subject to vehicle/equipment availability",
      "Please call to confirm suitability before booking",
    ],
    subjectToAvailability: true,
    icon: "picu",
  },
  {
    slug: "ccu-ambulance",
    name: "CCU Ambulance",
    shortName: "CCU",
    summary:
      "Cardiac-care patient transportation, subject to vehicle and equipment availability.",
    description:
      "CCU ambulance support is intended for cardiac-care patient transportation needs. Availability depends on the vehicle and equipment on hand — please call our team to confirm before booking.",
    bullets: [
      "Subject to vehicle/equipment availability",
      "Please call to confirm suitability before booking",
    ],
    subjectToAvailability: true,
    icon: "ccu",
  },
  {
    slug: "hospital-transfer",
    name: "Hospital Transfer",
    shortName: "Hospital Transfer",
    summary: "Hospital-to-hospital and hospital-to-home transportation.",
    description:
      "We support hospital-to-hospital and hospital-to-home transportation, helping patients move between care settings safely and comfortably.",
    bullets: [
      "Hospital-to-hospital transfers",
      "Hospital-to-home transportation",
      "Coordinated pickup and drop timing",
    ],
    subjectToAvailability: false,
    icon: "transfer",
  },
  {
    slug: "long-distance-ambulance",
    name: "Long-Distance Ambulance",
    shortName: "Long-Distance",
    summary: "Ambulance journeys across Karnataka and other parts of India.",
    description:
      "For patients who need to travel beyond Bangalore, we support long-distance ambulance journeys across Karnataka and other parts of India. Route, duration and requirements are discussed and confirmed with our team before the journey.",
    bullets: [
      "Journeys across Karnataka and other parts of India",
      "Experienced drivers for long-distance travel",
      "Requirements discussed and confirmed before departure",
    ],
    subjectToAvailability: false,
    icon: "longDistance",
  },
  {
    slug: "patient-transportation",
    name: "Patient Transportation",
    shortName: "Patient Transport",
    summary: "Safe transportation for patients who require ambulance support.",
    description:
      "General patient transportation for individuals who need ambulance support for appointments, discharge, or transfer between locations.",
    bullets: [
      "Safe, comfortable transportation",
      "Experienced drivers and staff support",
      "Available across Bangalore",
    ],
    subjectToAvailability: false,
    icon: "patient",
  },
];

export type Zone = "West" | "West/Central" | "North-West" | "North" | "South" | "South-East" | "South-East/Central" | "East/Central" | "East";

export interface ServiceArea {
  name: string;
  slug: string;
  confirmed: boolean;
  zone: Zone;
}

export const serviceAreas: ServiceArea[] = [
  { name: "Rajarajeshwari Nagar (RR Nagar)", slug: "rr-nagar", confirmed: true, zone: "West" },
  { name: "Vijayanagar", slug: "vijayanagar", confirmed: true, zone: "West" },
  { name: "Nagarbhavi", slug: "nagarbhavi", confirmed: true, zone: "West" },
  { name: "Kengeri", slug: "kengeri", confirmed: true, zone: "West" },
  { name: "Rajajinagar", slug: "rajajinagar", confirmed: true, zone: "West/Central" },
  { name: "Yeshwanthpur", slug: "yeshwanthpur", confirmed: true, zone: "North-West" },
  { name: "Peenya", slug: "peenya", confirmed: true, zone: "North-West" },
  { name: "RT Nagar", slug: "rt-nagar", confirmed: true, zone: "North" },
  { name: "Hebbal", slug: "hebbal", confirmed: true, zone: "North" },
  { name: "Yelahanka", slug: "yelahanka", confirmed: true, zone: "North" },
  { name: "Jayanagar", slug: "jayanagar", confirmed: true, zone: "South" },
  { name: "JP Nagar", slug: "jp-nagar", confirmed: true, zone: "South" },
  { name: "BTM Layout", slug: "btm-layout", confirmed: true, zone: "South" },
  { name: "Bannerghatta Road", slug: "bannerghatta-road", confirmed: true, zone: "South" },
  { name: "HSR Layout", slug: "hsr-layout", confirmed: true, zone: "South-East" },
  { name: "Electronic City", slug: "electronic-city", confirmed: true, zone: "South-East" },
  { name: "Koramangala", slug: "koramangala", confirmed: true, zone: "South-East/Central" },
  { name: "Indiranagar", slug: "indiranagar", confirmed: true, zone: "East/Central" },
  { name: "Marathahalli", slug: "marathahalli", confirmed: true, zone: "East" },
  { name: "Whitefield", slug: "whitefield", confirmed: true, zone: "East" },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How can I book an ambulance in Bangalore?",
    answer:
      "Call Meghana Ambulance Service directly at " +
      business.phoneDisplay +
      " or " +
      business.secondaryPhoneDisplay +
      " — both lines are available 24/7. You can also message us on WhatsApp or use the Request Ambulance form on this website. For emergencies, always call rather than filling a form.",
  },
  {
    question: "Which areas in Bangalore does Meghana Ambulance Service cover?",
    answer:
      "We cover 20 areas across Bangalore: RR Nagar, Vijayanagar, Nagarbhavi, Kengeri, Rajajinagar, Yeshwanthpur, Peenya, RT Nagar, Hebbal, Yelahanka, Jayanagar, JP Nagar, BTM Layout, Bannerghatta Road, HSR Layout, Electronic City, Koramangala, Indiranagar, Marathahalli, and Whitefield. Call us to confirm coverage for your exact pickup location.",
  },
  {
    question: "Is ambulance service available in RR Nagar / Rajarajeshwari Nagar?",
    answer:
      "Yes, Meghana Ambulance Service covers Rajarajeshwari Nagar (RR Nagar) and the surrounding West Bangalore areas including Vijayanagar, Nagarbhavi, and Kengeri. Call " +
      business.phoneDisplay +
      " for immediate assistance.",
  },
  {
    question: "Do you provide ambulance service in Whitefield and Marathahalli?",
    answer:
      "Yes, we provide ambulance service in Whitefield and Marathahalli in East Bangalore. Call " +
      business.phoneDisplay +
      " or " +
      business.secondaryPhoneDisplay +
      " any time, day or night.",
  },
  {
    question: "Is ambulance service available in Koramangala, HSR Layout, and Electronic City?",
    answer:
      "Yes, Meghana Ambulance Service covers Koramangala, HSR Layout, Electronic City, and nearby South-East Bangalore areas. Our team is reachable 24/7 at " +
      business.phoneDisplay +
      ".",
  },
  {
    question: "Do you provide hospital-to-hospital transfers in Bangalore?",
    answer:
      "Yes, we support hospital-to-hospital and hospital-to-home transfers across all our service areas in Bangalore. Call our team with your pickup hospital, destination, and patient details to arrange a coordinated transfer.",
  },
  {
    question: "Do you provide long-distance ambulance journeys from Bangalore?",
    answer:
      "Yes, we support long-distance ambulance journeys from Bangalore to destinations across Karnataka and other parts of India. Route, duration, and requirements are confirmed with our team before departure.",
  },
  {
    question: "Do you provide ICU ambulance services?",
    answer:
      "ICU ambulance support is available subject to vehicle and equipment availability at the time of your request. Please call " +
      business.phoneDisplay +
      " to confirm suitability for your patient before booking.",
  },
  {
    question: "Do you provide NICU, PICU, and CCU ambulance services?",
    answer:
      "NICU, PICU, and CCU ambulance support are available subject to vehicle and equipment availability. Call our team to discuss your specific requirement — neonatal, pediatric critical-care, or cardiac-care — before booking.",
  },
  {
    question: "Is Meghana Ambulance Service available 24 hours a day?",
    answer:
      "Yes, Meghana Ambulance Service is available 24 hours a day, 7 days a week, including weekends and public holidays. Call " +
      business.phoneDisplay +
      " or " +
      business.secondaryPhoneDisplay +
      " at any time.",
  },
  {
    question: "Can hospitals and clinics partner with Meghana Ambulance Service?",
    answer:
      "Yes. We work with hospitals, nursing homes, clinics, diagnostic centres, and other healthcare organizations in Bangalore on patient transportation and ambulance coordination. Use the Hospital Partnerships form or call our team to start a conversation.",
  },
  {
    question: "How do I contact Meghana Ambulance Service?",
    answer:
      "Call " +
      business.phoneDisplay +
      " or " +
      business.secondaryPhoneDisplay +
      ", message us on WhatsApp at " +
      business.phoneDisplay +
      ", or use the contact form on this website. Both phone lines are available 24/7.",
  },
];

export function buildWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || business.whatsappDefaultMessage
  );
  return `https://wa.me/${business.whatsappNumberIntl}?text=${message}`;
}

export function buildTelUrl(number: string): string {
  return `tel:+91${number}`;
}
