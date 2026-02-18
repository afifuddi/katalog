import { Metadata } from "next";

const siteUrl = "https://borboreofficial.id";

export const metadata: Metadata = {
    title: "Export Solutions",
    description:
        "Professional coffee export management from Indonesia. FOB, CIF, CFR shipping from Belawan and Tanjung Priok ports. Minimum order 1 ton. Solusi ekspor kopi profesional dari Indonesia.",
    keywords: [
        // English
        "coffee export",
        "Indonesia coffee export",
        "FOB coffee",
        "CIF coffee",
        "CFR coffee shipping",
        "green coffee beans export",
        "Belawan port",
        "Tanjung Priok port",
        "coffee supplier Indonesia",
        "bulk coffee beans",
        "coffee import from Indonesia",
        // Indonesian
        "ekspor kopi",
        "ekspor kopi Indonesia",
        "FOB kopi Indonesia",
        "CIF kopi",
        "pengiriman kopi ekspor",
        "biji kopi mentah ekspor",
        "pelabuhan Belawan",
        "pelabuhan Tanjung Priok",
        "supplier kopi Indonesia",
        "jual kopi curah",
        "impor kopi Indonesia",
        "eksportir kopi profesional",
        "kopi green bean ekspor",
    ],
    openGraph: {
        title: "Export Solutions | BORBORÉ.id",
        description:
            "Professional coffee export management for premium Indonesian coffee. FOB, CIF, CFR shipping available.",
        url: `${siteUrl}/export`,
        type: "website",
        images: [
            {
                url: `${siteUrl}/logoBBR.jpg`,
                width: 1200,
                height: 630,
                alt: "BORBORÉ Coffee Export Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Export Solutions | BORBORÉ.id",
        description:
            "Professional coffee export from Indonesia. FOB, CIF, CFR. Solusi ekspor kopi profesional dari Indonesia.",
        images: [`${siteUrl}/logoBBR.jpg`],
    },
    alternates: {
        canonical: `${siteUrl}/export`,
    },
};

export default function ExportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
