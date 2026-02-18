import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const siteUrl = "https://borboreofficial.id";

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "BORBORÉ.id | Premium Indonesian Coffee Exporter",
    template: "%s | BORBORÉ.id",
  },
  description: "A professional Indonesian coffee exporter delivering premium Arabica and Robusta sourced from the highland regions of North Sumatra and Aceh. Export-grade quality with distinctive flavor profiles.",
  keywords: [
    // English
    "Indonesian coffee exporter",
    "Arabica coffee",
    "Robusta coffee",
    "Sumatra coffee",
    "Gayo coffee",
    "Sidikalang coffee",
    "Mandailing coffee",
    "Specialty coffee Indonesia",
    "Green coffee beans",
    "Coffee export",
    "PT Agro Beans Global",
    "BORBORÉ",
    "BORBORE",
    "North Sumatra coffee",
    "Aceh coffee",
    "Single origin coffee",
    // Indonesian
    "eksportir kopi Indonesia",
    "kopi Arabika",
    "kopi Robusta",
    "kopi Sumatera",
    "kopi Gayo",
    "kopi Sidikalang",
    "kopi Mandailing",
    "kopi spesialti Indonesia",
    "biji kopi mentah",
    "ekspor kopi",
    "kopi dataran tinggi",
    "kopi Sumatera Utara",
    "kopi Aceh",
    "kopi single origin",
    "jual kopi ekspor",
    "supplier kopi Indonesia",
    "green bean kopi",
    "kopi Tapanuli",
    "kopi Siborong-Borong",
  ],
  authors: [{ name: "PT Agro Beans Global" }],
  creator: "PT Agro Beans Global",
  publisher: "PT Agro Beans Global",
  verification: {
    google: "MiOLmoubVkqi2gfLOdom9nrFgIUMPJdmtArpiybjGBc",
    yandex: "df80c0a438e17784"
  },

  // Favicon & Icons
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteUrl,
    siteName: "BORBORÉ.id",
    title: "BORBORÉ.id | Premium Indonesian Coffee Exporter",
    description: "A professional Indonesian coffee exporter delivering premium Arabica and Robusta sourced from the highland regions of North Sumatra and Aceh.",
    images: [
      {
        url: `${siteUrl}/logoBBR.jpg`,
        width: 1200,
        height: 630,
        alt: "BORBORÉ - Premium Indonesian Coffee",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "BORBORÉ.id | Premium Indonesian Coffee Exporter",
    description: "Professional Indonesian coffee exporter delivering premium Arabica and Robusta from North Sumatra and Aceh.",
    images: [`${siteUrl}/logoBBR.jpg`],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },



  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "id-ID": "/",
    },
  },

  // Additional meta
  category: "Coffee Export",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PT Agro Beans Global",
              alternateName: "BORBORÉ.id",
              url: siteUrl,
              logo: `${siteUrl}/logoBBR.jpg`,
              description: "Professional Indonesian coffee exporter delivering premium Arabica and Robusta from North Sumatra and Aceh.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bekasi",
                addressRegion: "West Java",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "borboreofficial.id@gmail.com",
                contactType: "sales",
              },
              sameAs: [
                "https://www.instagram.com/borbore.id",
              ],
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BORBORÉ.id",
              alternateName: "Borbore Official",
              url: siteUrl,
              description: "Professional Indonesian coffee exporter delivering premium Arabica and Robusta from North Sumatra and Aceh.",
              publisher: {
                "@type": "Organization",
                name: "PT Agro Beans Global",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
