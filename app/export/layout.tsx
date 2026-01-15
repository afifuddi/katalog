import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Export Solutions",
    description: "Professional coffee export management from Indonesia. FOB, CIF, CFR shipping from Belawan and Tanjung Priok ports. Minimum order 1 ton with flexible arrangements.",
    keywords: ["coffee export", "Indonesia coffee export", "FOB coffee", "CIF coffee", "green coffee beans export", "Belawan port", "coffee supplier"],
    openGraph: {
        title: "Export Solutions | BORBORÉ.id",
        description: "Professional coffee export management for premium Indonesian coffee from North Sumatra and Aceh.",
        type: "website",
    },
};

export default function ExportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
