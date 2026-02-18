import type { Metadata } from "next";
import productsData from "@/data/products.json";
import ProductDetailClient from "@/components/pages/ProductDetailClient";

const siteUrl = "https://borboreofficial.id";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = productsData.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested coffee product could not be found.",
        };
    }

    const typeId = product.type === "Arabica" ? "Arabika" : "Robusta";
    const regionId = product.region_id || product.region;

    const title = `${product.name} - ${product.type} Coffee`;
    const description = `${product.name}: ${product.desc} Grade ${product.grade}, SCA ${product.sca}+, ${product.altitude}. ${product.desc_id || ''}`;

    return {
        title,
        description,
        keywords: [
            // English keywords
            `${product.name}`,
            `${product.type} coffee`,
            `${product.region} coffee`,
            `Indonesian ${product.type} coffee`,
            `${product.process} coffee`,
            `${product.grade} coffee beans`,
            `specialty coffee ${product.region}`,
            "green coffee beans",
            "Indonesian coffee exporter",
            "single origin coffee",
            // Indonesian keywords
            `kopi ${product.name}`,
            `kopi ${typeId}`,
            `kopi ${typeId} ${regionId}`,
            `kopi ${regionId}`,
            `biji kopi ${typeId}`,
            `kopi spesialti ${regionId}`,
            `jual kopi ${regionId}`,
            `kopi ${product.process}`,
            `green bean kopi ${regionId}`,
            "eksportir kopi Indonesia",
            "biji kopi mentah",
            "kopi dataran tinggi",
            "kopi Sumatera",
            ...(product.variety ? [
                `kopi varietas ${product.variety}`,
                `${product.variety} coffee variety`,
            ] : []),
        ],
        openGraph: {
            title: `${product.name} - ${product.type} Coffee | BORBORÉ.id`,
            description: `${product.desc} ${product.desc_id || ''}`.trim(),
            url: `${siteUrl}/catalog/${product.slug}`,
            siteName: "BORBORÉ.id",
            images: [
                {
                    url: `${siteUrl}${product.image}`,
                    width: 800,
                    height: 800,
                    alt: `${product.name} - Premium ${product.type} Coffee from ${product.region}`,
                },
            ],
            type: "website",
            locale: "en_US",
            alternateLocale: "id_ID",
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.name} - ${product.type} | BORBORÉ.id`,
            description: `${product.desc} | SCA ${product.sca}+ | ${product.altitude}`,
            images: [`${siteUrl}${product.image}`],
        },
        alternates: {
            canonical: `${siteUrl}/catalog/${product.slug}`,
        },
    };
}

export function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductDetailPage() {
    return <ProductDetailClient />;
}
