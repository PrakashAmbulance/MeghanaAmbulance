import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileEmergencyBar from "@/components/MobileEmergencyBar";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import OrganizationJsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";

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
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | 24/7 Ambulance Service in Bangalore`,
    description: business.shortDescription,
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="has-mobile-cta flex min-h-full flex-col bg-white text-ink-900">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatButton />
        <MobileEmergencyBar />
      </body>
    </html>
  );
}
