import { Metadata } from "next";

const siteUrl = "https://borboreofficial.id";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "PT Agro Beans Global (AF Brother Group) — Professional Indonesian coffee exporter. Learn about our partnership-based sourcing model, vision, and commitment to quality. Eksportir kopi Indonesia profesional dengan model kemitraan petani.",
    keywords: [
        // English
        "PT Agro Beans Global",
        "Indonesian coffee company",
        "coffee exporter Indonesia",
        "AF Brother Group",
        "sustainable coffee sourcing",
        "coffee farmer partnership",
        "BORBORÉ coffee",
        "coffee supplier Indonesia",
        // Indonesian
        "perusahaan kopi Indonesia",
        "eksportir kopi Indonesia",
        "kemitraan petani kopi",
        "pemasok kopi Indonesia",
        "kopi berkelanjutan",
        "tentang BORBORÉ",
        "kopi Sumatera Utara",
        "kopi Aceh",
        "perusahaan ekspor kopi",
    ],
    openGraph: {
        title: "About Us | BORBORÉ.id",
        description:
            "PT Agro Beans Global — Professional Indonesian coffee exporter delivering premium quality from North Sumatra and Aceh.",
        url: `${siteUrl}/about`,
        type: "website",
        images: [
            {
                url: `${siteUrl}/logoBBR.jpg`,
                width: 1200,
                height: 630,
                alt: "About BORBORÉ - PT Agro Beans Global",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | BORBORÉ.id",
        description:
            "PT Agro Beans Global — Professional Indonesian coffee exporter. Eksportir kopi Indonesia profesional.",
        images: [`${siteUrl}/logoBBR.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/about`,
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
