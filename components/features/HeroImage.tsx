'use client';

import { useState } from 'react';
import Image from 'next/image';

export function HeroImage() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative hidden lg:block">
            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-60" />

            <div className="relative z-10 w-[400px] h-[400px] mx-auto rounded-full border border-white/10 shadow-2xl shadow-black/50 overflow-hidden group">
                {/* Skeleton while loading */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                )}
                <Image
                    src="/images/hero/example-image.jpg"
                    alt="Premium Indonesian Coffee"
                    fill
                    sizes="400px"
                    className={`object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                    priority={false}
                />
            </div>
        </div>
    );
}
