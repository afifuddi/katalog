'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import productsData from '@/data/products.json';
import { ProductGridSkeleton } from '@/components/ui/Skeleton';
import { Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

// Type definition for the JSON data
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

// Product Card with optimized Image
function ProductCard({ product, language }: { product: Product; language: 'en' | 'id' }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const t = translations.catalog;

    // Get localized content
    const desc = language === 'id' && product.desc_id ? product.desc_id : product.desc;
    const region = language === 'id' && product.region_id ? product.region_id : product.region;
    const variety = language === 'id' && product.variety_id ? product.variety_id : product.variety;

    return (
        <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all border border-white/5 flex flex-col hover:-translate-y-1 duration-300">
            <div className="h-64 bg-zinc-800 relative overflow-hidden">
                {/* Skeleton placeholder while image loads */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                )}
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{product.type}</span>
                    <span className="text-white/40 text-xs">{region}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/catalog/${product.slug}`} className="before:absolute before:inset-0">
                        {product.name}
                    </Link>
                </h3>
                {variety && (
                    <p className="text-xs text-white/40 mb-2">{t.variety[language]}: {variety}</p>
                )}
                <p className="text-sm text-white/60 mb-6 line-clamp-2 leading-relaxed flex-grow">
                    {desc}
                </p>

                <div className="grid grid-cols-2 gap-y-4 text-sm pt-6 border-t border-white/10 mt-auto">
                    <div>
                        <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-1">{t.altitude[language]}</span>
                        <span className="font-medium text-white text-sm">{product.altitude}</span>
                    </div>
                    <div className="text-right" title={t.scaScoreInfo[language]}>
                        <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-1 cursor-help">{t.scaScore[language]} ⓘ</span>
                        <span className="font-bold text-primary text-lg">{product.sca}+</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProductGrid() {
    const [filterType, setFilterType] = useState<string | null>(null);
    const [filterRegion, setFilterRegion] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { language } = useLanguage();
    const t = translations.catalog;

    // Get unique regions
    const regions = [...new Set(products.map(p => p.region))];

    const filteredProducts = products.filter(p => {
        if (filterType && p.type !== filterType) return false;
        if (filterRegion && p.region !== filterRegion) return false;
        return true;
    });

    // Simulate loading state when filters change
    const handleFilterChange = (setter: (value: string | null) => void, value: string | null) => {
        setIsLoading(true);
        setter(value);
        setTimeout(() => setIsLoading(false), 300);
    };

    return (
        <div>
            {/* Filters */}
            <div className="mb-12 p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">{t.beanType[language]}</label>
                        <div className="flex gap-3 flex-wrap">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === null ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => handleFilterChange(setFilterType, null)}
                            >
                                {t.all[language]}
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === 'Arabica' ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => handleFilterChange(setFilterType, 'Arabica')}
                            >
                                Arabica
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === 'Robusta' ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => handleFilterChange(setFilterType, 'Robusta')}
                            >
                                Robusta
                            </button>
                        </div>
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">{t.region[language]}</label>
                        <div className="flex gap-3 flex-wrap">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRegion === null ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => handleFilterChange(setFilterRegion, null)}
                            >
                                {t.all[language]}
                            </button>
                            {regions.map(region => (
                                <button
                                    key={region}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRegion === region ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                    onClick={() => handleFilterChange(setFilterRegion, region)}
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            {isLoading ? (
                <ProductGridSkeleton count={6} />
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} language={language} />
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-white/30">
                            {language === 'en' ? 'No products found matching your filters.' : 'Tidak ada produk yang sesuai dengan filter Anda.'}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
