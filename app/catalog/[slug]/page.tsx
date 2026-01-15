'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, CheckCircle, Download, Award, Mountain, Droplets, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';
import { ProductDetailSkeleton } from '@/components/ui/Skeleton';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

interface Product {
    id: string;
    slug: string;
    name: string;
    type: string;
    variety?: string;
    variety_id?: string;
    region: string;
    region_id?: string;
    process: string;
    grade: string;
    moisture: string;
    altitude: string;
    optimal_altitude?: string;
    sca: string;
    defects: string;
    certification?: string;
    desc: string;
    desc_id?: string;
    detailed_desc: string;
    detailed_desc_id?: string;
    image: string;
}

const products: Product[] = productsData;

export default function ProductDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const { language } = useLanguage();
    const t = translations.product;
    const ct = translations.catalog;

    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const foundProduct = products.find(p => p.slug === slug);
            setProduct(foundProduct || null);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [slug]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col font-sans bg-black text-white">
                <Navbar />
                <main className="flex-grow py-20 md:py-32">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="h-4 w-32 bg-zinc-800 animate-pulse rounded mb-8" />
                        <ProductDetailSkeleton />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col font-sans bg-black text-white">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">
                            {language === 'en' ? 'Product Not Found' : 'Produk Tidak Ditemukan'}
                        </h1>
                        <Link href="/catalog">
                            <Button>{t.backToCatalog[language]}</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Get localized content
    const desc = language === 'id' && product.desc_id ? product.desc_id : product.desc;
    const detailedDesc = language === 'id' && product.detailed_desc_id ? product.detailed_desc_id : product.detailed_desc;
    const region = language === 'id' && product.region_id ? product.region_id : product.region;
    const variety = language === 'id' && product.variety_id ? product.variety_id : product.variety;

    return (
        <div className="min-h-screen flex flex-col font-sans bg-black text-white">
            <Navbar />
            <main className="flex-grow py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/catalog" className="inline-flex items-center text-sm text-white/50 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> {t.backToCatalog[language]}
                    </Link>

                    {/* Image Section - Top */}
                    <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/5 mb-8">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                            {/* Image */}
                            <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] aspect-square mx-auto lg:mx-0 flex-shrink-0">
                                {!imageLoaded && (
                                    <div className="absolute inset-0 bg-zinc-800 animate-pulse rounded-xl" />
                                )}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className={`w-full h-full object-contain rounded-xl transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    onLoad={() => setImageLoaded(true)}
                                    priority
                                />
                                {product.certification && (
                                    <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
                                        <Award className="h-3 w-3" /> GI
                                    </div>
                                )}
                            </div>

                            {/* Title & Quick Info */}
                            <div className="flex-grow text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs">{product.type}</span>
                                    <span className="px-2 py-0.5 bg-white/5 rounded-full text-[10px] text-white/70 border border-white/10">{product.grade}</span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2">{product.name}</h1>
                                {variety && (
                                    <p className="text-white/50 text-sm mb-4">{ct.variety[language]}: <span className="text-white/70">{variety}</span></p>
                                )}
                                <p className="text-white/60 leading-relaxed text-sm lg:text-base mb-6 max-w-xl">
                                    {desc}
                                </p>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                    <Link href="/export">
                                        <Button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-amber-600 rounded-full font-medium text-white">
                                            {t.requestQuote[language]}
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="w-full sm:w-auto h-12 px-6 border-white/20 text-white hover:bg-white hover:text-black rounded-full font-medium text-sm">
                                        <Download className="mr-2 h-4 w-4" /> {t.specSheet[language]}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        {/* About */}
                        <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                            <h2 className="text-lg font-bold text-white mb-4">{t.aboutThisCoffee[language]}</h2>
                            <p className="text-white/70 leading-relaxed">
                                {detailedDesc || desc}
                            </p>
                        </div>

                        {/* Specifications */}
                        <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                            <h2 className="text-lg font-bold text-white mb-4">{t.specifications[language]}</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="p-4 bg-black/30 rounded-xl">
                                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">{t.origin[language]}</span>
                                    <span className="text-sm font-medium">{region}</span>
                                </div>
                                <div className="p-4 bg-black/30 rounded-xl">
                                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">{t.process[language]}</span>
                                    <span className="text-sm font-medium">{product.process}</span>
                                </div>
                                <div className="p-4 bg-black/30 rounded-xl">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Mountain className="h-3 w-3 text-white/40" />
                                        <span className="text-[10px] uppercase tracking-widest text-white/40">{ct.altitude[language]}</span>
                                    </div>
                                    <span className="text-sm font-medium">{product.altitude}</span>
                                </div>
                                <div className="p-4 bg-black/30 rounded-xl">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Droplets className="h-3 w-3 text-white/40" />
                                        <span className="text-[10px] uppercase tracking-widest text-white/40">{t.moisture[language]}</span>
                                    </div>
                                    <span className="text-sm font-medium">{product.moisture}</span>
                                </div>
                                <div className="p-4 bg-black/30 rounded-xl">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Target className="h-3 w-3 text-white/40" />
                                        <span className="text-[10px] uppercase tracking-widest text-white/40">{t.defects[language]}</span>
                                    </div>
                                    <span className="text-sm font-medium">{product.defects}</span>
                                </div>
                                <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                                    <span className="block text-[10px] uppercase tracking-widest text-primary mb-1">{ct.scaScore[language]}</span>
                                    <span className="text-xl font-bold text-primary">{product.sca}+</span>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Uses */}
                        <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                            <h2 className="text-lg font-bold text-white mb-4">{t.recommendedUses[language]}</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full text-sm text-white/70">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    {t.specialtyRoasters[language]}
                                </span>
                                <span className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full text-sm text-white/70">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    {t.espressoBlends[language]}
                                </span>
                                <span className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full text-sm text-white/70">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    {t.singleOrigin[language]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
