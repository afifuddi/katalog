import { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/features/ProductGrid';
import { FilterSkeleton, ProductGridSkeleton } from '@/components/ui/Skeleton';

export default function Catalog() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-black">
            <Navbar />
            <main className="flex-grow">
                <div className="bg-gradient-to-b from-zinc-900 to-black text-white pt-32 pb-16 border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Our Coffee Collection</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Premium Indonesian Coffee</h1>
                        <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
                            Browse our selection of single-origin and specialty grade Arabica and Robusta beans from Siborong-Borong, Sidikalang, Mandailing, and Gayo Highlands.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <Suspense fallback={
                        <>
                            <FilterSkeleton />
                            <ProductGridSkeleton count={6} />
                        </>
                    }>
                        <ProductGrid />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </div>
    );
}
