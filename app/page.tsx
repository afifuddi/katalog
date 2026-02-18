import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";

const siteUrl = "https://borboreofficial.id";

export const metadata: Metadata = {
  title: "BORBORÉ.id | Premium Indonesian Coffee Exporter",
  description:
    "Professional Indonesian coffee exporter delivering premium Arabica and Robusta from North Sumatra and Aceh highlands. Eksportir kopi Indonesia profesional dari dataran tinggi Sumatera Utara dan Aceh.",
  keywords: [
    // English
    "Indonesian coffee exporter",
    "premium Arabica coffee",
    "Robusta coffee beans",
    "specialty coffee Indonesia",
    "green coffee beans supplier",
    "single origin coffee",
    "coffee export company",
    "North Sumatra coffee",
    "Aceh coffee beans",
    "Gayo coffee",
    "Sidikalang coffee",
    "Mandailing coffee",
    "Siborong-Borong coffee",
    "PT Agro Beans Global",
    "BORBORÉ",
    // Indonesian
    "eksportir kopi Indonesia",
    "kopi Arabika premium",
    "kopi Robusta",
    "kopi spesialti Indonesia",
    "supplier biji kopi mentah",
    "kopi single origin",
    "perusahaan ekspor kopi",
    "kopi Sumatera Utara",
    "kopi Aceh",
    "kopi Gayo",
    "kopi Sidikalang",
    "kopi Mandailing",
    "kopi Siborong-Borong",
    "jual kopi ekspor",
    "kopi dataran tinggi",
    "biji kopi green bean",
    "kopi Sumatra",
    "kopi Tapanuli",
  ],
  openGraph: {
    title: "BORBORÉ.id | Premium Indonesian Coffee Exporter",
    description:
      "Professional Indonesian coffee exporter delivering premium Arabica and Robusta from North Sumatra and Aceh. Eksportir kopi Indonesia profesional.",
    url: siteUrl,
    siteName: "BORBORÉ.id",
    images: [
      {
        url: `${siteUrl}/logoBBR.jpg`,
        width: 1200,
        height: 630,
        alt: "BORBORÉ - Premium Indonesian Coffee",
      },
    ],
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "BORBORÉ.id | Premium Indonesian Coffee Exporter",
    description:
      "Professional Indonesian coffee exporter. Eksportir kopi Indonesia profesional dari Sumatera Utara dan Aceh.",
    images: [`${siteUrl}/logoBBR.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return <HomeClient />;
}
