'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

import productsData from '@/data/products.json';

// Type definition for the JSON data
interface Product {
    id: string;
    slug: string;
    name: string;
    type: string;
    region: string;
    process: string;
    grade: string;
    moisture: string;
    altitude: string;
    sca: string;
    defects: string;
    desc: string;
    detailed_desc: string;
    image: string;
}

const products: Product[] = productsData;

export function ProductGrid() {
    const [filterType, setFilterType] = useState<string | null>(null);
    const [filterProcess, setFilterProcess] = useState<string | null>(null);

    const filteredProducts = products.filter(p => {
        if (filterType && p.type !== filterType) return false;
        if (filterProcess && p.process !== filterProcess) return false;
        return true;
    });

    return (
        <div>
            {/* Filters (Dark Theme) */}
            <div className="mb-12 p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Bean Type</label>
                        <div className="flex gap-3">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === null ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => setFilterType(null)}
                            >
                                All
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === 'Arabica' ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => setFilterType('Arabica')}
                            >
                                Arabica
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterType === 'Robusta' ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => setFilterType('Robusta')}
                            >
                                Robusta
                            </button>
                        </div>
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Process</label>
                        <div className="flex gap-3 flex-wrap">
                            <button
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterProcess === null ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                onClick={() => setFilterProcess(null)}
                            >
                                All
                            </button>
                            {['Semi-Washed', 'Wet-Hulled', 'Natural', 'Fully Washed'].map(proc => (
                                <button
                                    key={proc}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filterProcess === proc ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
                                    onClick={() => setFilterProcess(proc)}
                                >
                                    {proc}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all border border-white/5 flex flex-col hover:-translate-y-1 duration-300">
                        <div className="h-64 bg-zinc-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${product.image})` }}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
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
                            <p className="text-sm text-white/60 mb-6 line-clamp-2 leading-relaxed flex-grow">
                                {product.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-y-4 text-sm pt-6 border-t border-white/10 mt-auto">
                                <div>
                                    <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-1">Process</span>
                                    <span className="font-medium text-white">{product.process}</span>
                                </div>
                                <div className="text-right">
                                    <span className="block text-white/30 text-[10px] uppercase tracking-wider mb-1">SCA Score</span>
                                    <span className="font-bold text-primary text-lg">{product.sca}+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {filteredProducts.length === 0 && (
                    <div className="col-span-full text-center py-20 text-white/30">
                        No products found matching your filters.
                    </div>
                )}
            </div>
        </div>
    );
}
