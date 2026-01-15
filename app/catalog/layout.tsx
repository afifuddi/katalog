import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coffee Catalog",
    description: "Browse our selection of premium single-origin and specialty grade Arabica and Robusta coffee beans from Siborong-Borong, Sidikalang, Mandailing, and Gayo Highlands.",
    keywords: ["coffee catalog", "Arabica beans", "Robusta beans", "Indonesian coffee", "specialty coffee", "Gayo coffee", "Sidikalang coffee", "Mandailing coffee"],
    openGraph: {
        title: "Coffee Catalog | BORBORÉ.id",
        description: "Premium single-origin Arabica and Robusta coffee from Indonesian highlands.",
        type: "website",
    },
};

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
