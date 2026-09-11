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

export interface ServiceFaq {
  question: string;
  answer: string;
}

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
  /** Situations/patients this service is typically booked for. */
  idealFor: string[];
  /** Service-specific FAQs, shown on the service page and marked up as FAQPage schema. */
  faqs: ServiceFaq[];
  /** Slugs of other services to cross-link from this service's page. */
  relatedSlugs: string[];
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
  streetAddress: "50 Feet Main Rd, 1st Block, Hanumanthnagar, Banashankari 1st Stage",
  postalCode: "560050",

  // ---- Site metadata -----------------------------------------------------
  siteUrl: "https://www.meghanaambulance.in",
  logoPath: "/images/logo.png",

  // Google Business Profile "write a review" short link.
  googleReviewUrl: "https://g.page/r/CV2pUAUyqxqEEBM/review",

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
    idealFor: [
      "Road traffic accidents and other injuries",
      "Sudden chest pain, breathing difficulty, or stroke symptoms",
      "Medical emergencies at home, work, or in a public place",
      "Any situation where a patient needs urgent transport to hospital",
    ],
    faqs: [
      {
        question: "How do I book an emergency ambulance in Bangalore right now?",
        answer:
          "Call " +
          business.phoneDisplay +
          " or " +
          business.secondaryPhoneDisplay +
          " directly — both lines are available 24/7. For a genuine emergency, always call rather than filling out a form online.",
      },
      {
        question: "What information should I share when I call for an emergency ambulance?",
        answer:
          "Tell our team the patient's condition (conscious or unconscious, breathing normally or not, any visible injury), the exact pickup address with a nearby landmark, and the hospital you'd prefer, if you have one in mind.",
      },
      {
        question: "Is staff nurse support available with the emergency ambulance?",
        answer:
          "Staff nurse assistance is coordinated for emergency trips. Mention the patient's condition when you call so our team can arrange support accordingly.",
      },
    ],
    relatedSlugs: ["hospital-transfer", "long-distance-ambulance", "patient-transportation"],
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
    idealFor: [
      "Critically ill patients who need continuous monitoring during transport",
      "Inter-hospital transfer of patients on oxygen or ventilator support, subject to equipment availability",
      "Discharge from ICU to a step-down facility or home",
      "Transfers where the treating doctor has advised ICU-level transport",
    ],
    faqs: [
      {
        question: "What is an ICU ambulance and when is it needed?",
        answer:
          "An ICU ambulance is intended for patients who need a higher level of medical support during transport than a standard ambulance provides — for example, inter-hospital transfer of a critically ill patient. Availability depends on the vehicle and equipment on hand, so please call to confirm before booking.",
      },
      {
        question: "Do I need a doctor's referral to book an ICU ambulance?",
        answer:
          "A referral isn't required to call us, but if the treating doctor has given specific instructions — oxygen requirement, monitoring needs, medication — share these when you call so our team can confirm suitability for your patient.",
      },
      {
        question: "Can an ICU ambulance be arranged for a long-distance transfer?",
        answer:
          "Long-distance ICU-level transfers can be discussed, subject to availability. Call our team with the pickup and destination details and we'll confirm what can be arranged.",
      },
    ],
    relatedSlugs: ["ccu-ambulance", "hospital-transfer", "emergency-ambulance"],
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
    idealFor: [
      "Newborns being transferred between hospitals",
      "Neonatal discharge transport home, once the baby has medical clearance",
      "Cases where a paediatrician or NICU team has advised specialised transport",
    ],
    faqs: [
      {
        question: "What is a NICU ambulance used for?",
        answer:
          "A NICU ambulance is intended for neonatal transportation needs such as hospital-to-hospital transfer or a discharge journey home, subject to vehicle and equipment availability at the time of your request.",
      },
      {
        question: "Should the hospital know before I book a NICU ambulance?",
        answer:
          "It helps if your baby's treating doctor or hospital is aware of the transfer plan in advance, so both ends can coordinate the handover smoothly.",
      },
      {
        question: "How do I check if a NICU ambulance is available right now?",
        answer:
          "Call " +
          business.phoneDisplay +
          " and describe your requirement — our team will confirm vehicle and equipment availability before the booking is confirmed.",
      },
    ],
    relatedSlugs: ["picu-ambulance", "hospital-transfer", "emergency-ambulance"],
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
    idealFor: [
      "Children needing critical-care transport between hospitals",
      "Paediatric discharge from PICU who still need monitored transport",
      "Cases where a paediatric specialist has advised PICU-level transfer",
    ],
    faqs: [
      {
        question: "What is a PICU ambulance?",
        answer:
          "A PICU ambulance is intended for pediatric critical-care transportation needs, such as transferring a child between hospitals. Availability depends on the vehicle and equipment on hand — please call to confirm before booking.",
      },
      {
        question: "What should I share with the team when booking for a child?",
        answer:
          "Share the child's age, current condition, and any monitoring or oxygen requirement the treating doctor has mentioned, along with the pickup and destination hospital.",
      },
      {
        question: "Is PICU ambulance support available for discharge, not just emergencies?",
        answer:
          "Yes — PICU-level transport can be arranged for a monitored discharge journey as well as inter-hospital transfer, subject to availability.",
      },
    ],
    relatedSlugs: ["nicu-ambulance", "ccu-ambulance", "emergency-ambulance"],
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
    idealFor: [
      "Cardiac patients needing monitored transport between hospitals",
      "Post-procedure discharge transport after a cardiac admission",
      "Cases where a cardiologist has advised CCU-level transfer",
    ],
    faqs: [
      {
        question: "What is a CCU ambulance and who is it for?",
        answer:
          "A CCU ambulance is intended for cardiac-care patient transportation, such as inter-hospital transfer or a monitored discharge after a cardiac admission. Availability depends on the vehicle and equipment on hand — please call to confirm suitability for your patient.",
      },
      {
        question: "Can CCU ambulance be booked for a scheduled hospital transfer?",
        answer:
          "Yes — share the pickup hospital, destination, and the patient's condition when you call, and our team will confirm availability and timing.",
      },
      {
        question: "Do you coordinate with the receiving hospital?",
        answer:
          "Share the receiving hospital's details when you book — it helps our team and the destination hospital coordinate the handover.",
      },
    ],
    relatedSlugs: ["icu-ambulance", "hospital-transfer", "emergency-ambulance"],
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
    idealFor: [
      "Moving a patient from one hospital to another for specialised treatment",
      "Discharge from hospital to home",
      "Transport to a diagnostic centre or follow-up appointment and back",
    ],
    faqs: [
      {
        question: "Can you transfer a patient between two hospitals in Bangalore?",
        answer:
          "Yes, hospital-to-hospital transfer is one of our core services. Share both hospital names and addresses when you call so we can plan the route and timing.",
      },
      {
        question: "Do you help with discharge transport from hospital to home?",
        answer:
          "Yes, hospital-to-home transport is supported. Share the expected discharge time in advance where possible so we can plan the pickup.",
      },
      {
        question: "Is a wheelchair or stretcher available for the transfer?",
        answer:
          "Let our team know the patient's mobility needs when booking so the right vehicle and support can be arranged.",
      },
    ],
    relatedSlugs: ["patient-transportation", "long-distance-ambulance", "emergency-ambulance"],
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
    idealFor: [
      "Patients travelling from Bangalore to their hometown for continued care",
      "Inter-city hospital transfers across Karnataka and other states",
      "Situations where road travel is preferred over flight for medical reasons",
    ],
    faqs: [
      {
        question: "How far can Meghana Ambulance Service travel from Bangalore?",
        answer:
          "We support journeys across Karnataka and other parts of India. Share your destination when you call so the route, duration, and requirements can be discussed and confirmed before departure.",
      },
      {
        question: "Do you provide a nurse or attendant for long-distance trips?",
        answer:
          "Staff support for long-distance journeys is coordinated based on the patient's condition — mention this when you call so it can be arranged.",
      },
      {
        question: "How early should I book a long-distance ambulance?",
        answer:
          "As early as possible once travel is planned, so our team has time to coordinate the vehicle, driver, and route in advance.",
      },
    ],
    relatedSlugs: ["hospital-transfer", "patient-transportation", "icu-ambulance"],
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
    idealFor: [
      "Non-emergency transport for medical appointments or diagnostic visits",
      "Discharge from hospital when an ambulance is preferred over a private vehicle",
      "Elderly or mobility-limited patients who need supported transport",
    ],
    faqs: [
      {
        question: "Is patient transportation only for emergencies?",
        answer:
          "No — this service covers non-emergency transport such as medical appointments, hospital discharge, or transfer between locations.",
      },
      {
        question: "Can I schedule patient transportation in advance?",
        answer:
          "Yes, call or WhatsApp our team with your preferred date and time and we'll confirm availability.",
      },
      {
        question: "Which parts of Bangalore do you cover for patient transportation?",
        answer:
          "We cover 20 areas across Bangalore — check our coverage page or call " +
          business.phoneDisplay +
          " to confirm your location.",
      },
    ],
    relatedSlugs: ["hospital-transfer", "emergency-ambulance", "long-distance-ambulance"],
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

export const faqs: ServiceFaq[] = [
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
    question: "How do I find an ambulance near me in Bangalore right now?",
    answer:
      "Call " +
      business.phoneDisplay +
      " and share your exact location with a nearby landmark — our team dispatches based on where you are, so you don't need to search for the nearest ambulance yourself. We cover 20 areas across Bangalore and are reachable 24/7.",
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

export const fullAddress = `${business.name}, ${business.streetAddress}, ${business.city} ${business.postalCode}`;

export function buildGoogleMapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
}

export function buildGoogleMapsDirectionsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
}
