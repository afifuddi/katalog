'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-md bg-zinc-800/80',
                className
            )}
        />
    );
}

// Product Card Skeleton for ProductGrid
export function ProductCardSkeleton() {
    return (
        <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 flex flex-col">
            {/* Image skeleton */}
            <Skeleton className="h-64 w-full rounded-none" />

            <div className="p-8 flex-grow flex flex-col">
                {/* Type and Region */}
                <div className="flex justify-between items-start mb-4">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-20" />
                </div>

                {/* Title */}
                <Skeleton className="h-7 w-3/4 mb-3" />

                {/* Description */}
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-6" />

                {/* Bottom info */}
                <div className="grid grid-cols-2 gap-y-4 pt-6 border-t border-white/10 mt-auto">
                    <div>
                        <Skeleton className="h-2 w-12 mb-2" />
                        <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <Skeleton className="h-2 w-16 mb-2" />
                        <Skeleton className="h-6 w-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Grid of Product Card Skeletons
export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
}

// Hero Skeleton
export function HeroSkeleton() {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 pt-20">
                    <div>
                        <Skeleton className="h-20 w-80 mb-4" />
                        <Skeleton className="h-6 w-64" />
                    </div>
                    <Skeleton className="h-20 w-full max-w-lg" />
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-40 rounded-full" />
                        <Skeleton className="h-12 w-32 rounded-full" />
                    </div>
                    <div className="flex gap-12 pt-8">
                        <div>
                            <Skeleton className="h-3 w-20 mb-2" />
                            <Skeleton className="h-8 w-24" />
                        </div>
                        <div>
                            <Skeleton className="h-3 w-24 mb-2" />
                            <Skeleton className="h-8 w-16" />
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    <Skeleton className="w-[400px] h-[400px] mx-auto rounded-full" />
                </div>
            </div>
        </section>
    );
}

// Page Header Skeleton (for Catalog, Export pages)
export function PageHeaderSkeleton() {
    return (
        <div className="bg-gradient-to-b from-zinc-900 to-black pt-32 pb-16 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Skeleton className="h-4 w-32 mx-auto mb-4" />
                <Skeleton className="h-14 w-96 mx-auto mb-6" />
                <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto" />
            </div>
        </div>
    );
}

// Filter Skeleton
export function FilterSkeleton() {
    return (
        <div className="mb-12 p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <Skeleton className="h-3 w-20 mb-4" />
                    <div className="flex gap-3">
                        <Skeleton className="h-10 w-16 rounded-full" />
                        <Skeleton className="h-10 w-20 rounded-full" />
                        <Skeleton className="h-10 w-20 rounded-full" />
                    </div>
                </div>
                <div className="flex-1">
                    <Skeleton className="h-3 w-16 mb-4" />
                    <div className="flex gap-3 flex-wrap">
                        <Skeleton className="h-10 w-14 rounded-full" />
                        <Skeleton className="h-10 w-28 rounded-full" />
                        <Skeleton className="h-10 w-24 rounded-full" />
                        <Skeleton className="h-10 w-20 rounded-full" />
                        <Skeleton className="h-10 w-28 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Product Detail Skeleton
export function ProductDetailSkeleton() {
    return (
        <div className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">
            <div className="grid md:grid-cols-2">
                {/* Image */}
                <Skeleton className="h-96 md:h-auto min-h-[600px] rounded-none" />

                {/* Content */}
                <div className="p-8 md:p-16">
                    <div className="flex items-center gap-4 mb-6">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                    </div>
                    <Skeleton className="h-12 w-3/4 mb-6" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-6 w-2/3 mb-12" />

                    <div className="grid grid-cols-2 gap-6 mb-12">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-24 rounded-xl" />
                        ))}
                    </div>

                    <Skeleton className="h-14 w-full rounded-full mb-4" />
                    <Skeleton className="h-14 w-full rounded-full" />
                </div>
            </div>
        </div>
    );
}
