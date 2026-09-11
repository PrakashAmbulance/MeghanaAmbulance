import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileEmergencyBar from "@/components/MobileEmergencyBar";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import PartnerWithUsTab from "@/components/PartnerWithUsTab";
import OrganizationJsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | 24/7 Ambulance Service in Bangalore`,
    template: `%s | ${business.name}`,
  },
  description: business.shortDescription,
  keywords: [
    "ambulance service Bangalore",
    "ambulance service in Bangalore",
    "ambulance near me Bangalore",
    "emergency ambulance Bangalore",
    "24/7 ambulance Bangalore",
    "ICU ambulance Bangalore",
    "NICU ambulance Bangalore",
    "PICU ambulance Bangalore",
    "CCU ambulance Bangalore",
    "hospital transfer ambulance Bangalore",
    "patient transport Bangalore",
    "long distance ambulance Bangalore",
    "book ambulance online Bangalore",
    "ambulance booking Bangalore",
    "private ambulance service Bangalore",
    "ambulance phone number Bangalore",
    "ambulance contact number Bangalore",
    "AC ambulance Bangalore",
    "ambulance RR Nagar",
    "ambulance Rajarajeshwari Nagar",
    "ambulance Vijayanagar Bangalore",
    "ambulance Nagarbhavi",
    "ambulance Kengeri",
    "ambulance Rajajinagar",
    "ambulance Yeshwanthpur",
    "ambulance Peenya",
    "ambulance RT Nagar",
    "ambulance Hebbal",
    "ambulance Yelahanka",
    "ambulance Jayanagar",
    "ambulance JP Nagar",
    "ambulance BTM Layout",
    "ambulance Bannerghatta Road",
    "ambulance HSR Layout",
    "ambulance Electronic City",
    "ambulance Koramangala",
    "ambulance Indiranagar",
    "ambulance Marathahalli",
    "ambulance Whitefield",
    "Meghana Ambulance Service",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | 24/7 Ambulance Service in Bangalore`,
    description: business.shortDescription,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${business.name} — 24/7 Ambulance Service in Bangalore`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | 24/7 Ambulance Service in Bangalore`,
    description: business.shortDescription,
    images: ["/images/og-image.png"],
  },
  verification: {
    google: "5QfoxkPmRWTnKi8P1C0aDeeqI2E_wcFIAQ1naHGQdtc",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`h-full antialiased ${plusJakartaSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="has-mobile-cta flex min-h-full flex-col bg-white text-ink-900">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <div className="sticky top-0 z-40">
          <AnnouncementBar />
          <Header />
        </div>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatButton />
        <PartnerWithUsTab />
        <MobileEmergencyBar />
      </body>
    </html>
  );
}
