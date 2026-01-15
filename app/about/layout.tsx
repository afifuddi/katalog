import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "PT Agro Beans Global (AF Brother Group) - Professional Indonesian coffee exporter. Learn about our partnership-based sourcing model, vision, and commitment to quality.",
    keywords: ["PT Agro Beans Global", "Indonesian coffee company", "coffee exporter Indonesia", "AF Brother Group", "sustainable coffee sourcing"],
    openGraph: {
        title: "About Us | BORBORÉ.id",
        description: "PT Agro Beans Global - Professional Indonesian coffee exporter delivering premium quality from North Sumatra and Aceh.",
        type: "website",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
