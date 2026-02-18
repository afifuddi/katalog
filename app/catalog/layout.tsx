import { Metadata } from "next";

const siteUrl = "https://borboreofficial.id";

export const metadata: Metadata = {
    title: "Coffee Catalog",
    description:
        "Browse our selection of premium single-origin Arabica and Robusta coffee beans from Siborong-Borong, Sidikalang, Mandailing, and Gayo Highlands. Jelajahi koleksi biji kopi Arabika dan Robusta premium kami.",
    keywords: [
        // English
        "coffee catalog",
        "Arabica beans",
        "Robusta beans",
        "Indonesian coffee",
        "specialty coffee",
        "Gayo coffee",
        "Sidikalang coffee",
        "Mandailing coffee",
        "Siborong-Borong coffee",
        "green coffee beans",
        "single origin coffee",
        // Indonesian
        "katalog kopi",
        "biji kopi Arabika",
        "biji kopi Robusta",
        "kopi Indonesia",
        "kopi spesialti",
        "kopi Gayo",
        "kopi Sidikalang",
        "kopi Mandailing",
        "kopi Siborong-Borong",
        "jual biji kopi",
        "kopi single origin",
        "green bean kopi",
        "kopi dataran tinggi Sumatera",
        "borbore official",
        "borbore coffee",
        "borbore.id",
        "borbore"
    ],
    openGraph: {
        title: "Coffee Catalog | BORBORÉ.id",
        description:
            "Premium single-origin Arabica and Robusta coffee from Indonesian highlands. Kopi Arabika dan Robusta premium dari dataran tinggi Indonesia.",
        url: `${siteUrl}/catalog`,
        type: "website",
        images: [
            {
                url: `${siteUrl}/logoBBR.jpg`,
                width: 1200,
                height: 630,
                alt: "BORBORÉ Coffee Catalog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Coffee Catalog | BORBORÉ.id",
        description:
            "Browse premium Arabica & Robusta coffee beans from North Sumatra and Aceh. Jelajahi kopi premium dari Sumatera Utara dan Aceh.",
        images: [`${siteUrl}/logoBBR.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/catalog`,
    },
};

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
