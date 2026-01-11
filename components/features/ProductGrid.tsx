'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import productsData from '@/data/products.json';
import { ProductGridSkeleton } from '@/components/ui/Skeleton';
import { Award } from 'lucide-react';

// Type definition for the JSON data
interface Product {
    id: string;
    slug: string;
    name: string;
    type: string;
    variety?: string;
    region: string;
    process: string;
    grade: string;
    moisture: string;
    altitude: string;
    optimal_altitude?: string;
    sca: string;
    defects: string;
    certification?: string;
    desc: string;
    detailed_desc: string;
    image: string;
}

const products: Product[] = productsData;

// Product Card with optimized Image
function ProductCard({ product }: { product: Product }) {
    const [imageLoaded, setImageLoaded] = useState(false);

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

                {/* GI Badge */}
                {product.certification && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Award className="h-3 w-3" />
                        GI Certified
                    </div>
                )}
            </div>
            <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{product.type}</span>
                    <span className="text-white/40 text-xs">{product.region}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/catalog/${product.slug}`} className="before:absolute before:inset-0">
                        {product.name}
                    </Link>
                </h3>
                {product.variety && (
                    <p className="text-xs text-white/40 mb-2">Variety: {product.variety}</p>
                )}
                <p className="text-sm text-white/60 mb-6 line-clamp-2 leading-relaxed flex-grow">
                    {product.desc}
                </p>

                <div className="grid grid-cols-2 gap-y-4 text-sm pt-6 border-t border-white/10 mt-auto">
                    <div>
                        <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-1">Altitude</span>
                        <span className="font-medium text-white text-sm">{product.altitude}</span>
                    </div>
                    <div className="text-right">
                        <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-1">SCA Score</span>
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
                        <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Bean Type</label>
                        <div className="flex gap-3 flex-wrap">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === null ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => handleFilterChange(setFilterType, null)}
                            >
                                All
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
                        <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Region</label>
                        <div className="flex gap-3 flex-wrap">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterRegion === null ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => handleFilterChange(setFilterRegion, null)}
                            >
                                All
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
                        <ProductCard key={product.id} product={product} />
                    ))}
                    {filteredProducts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-white/30">
                            No products found matching your filters.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
