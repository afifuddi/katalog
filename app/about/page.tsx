'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/Skeleton';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

export default function About() {
    const [heroLoaded, setHeroLoaded] = useState(false);
    const [storyLoaded, setStoryLoaded] = useState(false);

    const missions = [
        "To deliver export-grade Arabica and Robusta coffee from North Sumatra and Aceh with consistent quality, traceability, and reliable supply.",
        "To build strong, transparent partnerships with smallholder farmers by implementing sustainable sourcing practices and fair trade principles.",
        "To apply strict quality control standards across harvesting, post-harvest processing, grading, and export preparation to meet international buyer specifications.",
        "To support global roasters, importers, and distributors with professional export management, timely delivery, and customized coffee solutions.",
        "To promote Indonesian single-origin coffee to the global market while creating long-term economic and social value for farming communities."
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans bg-black text-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero */}
                <section className="relative py-32 md:py-48 overflow-hidden">
                    <div className="absolute inset-0">
                        {!heroLoaded && (
                            <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                        )}
                        <Image
                            src="/images/hero/bg-hero.jpg"
                            alt="Coffee farmers in Indonesia"
                            fill
                            className={`object-cover transition-opacity duration-500 ${heroLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setHeroLoaded(true)}
                            priority
                        />
                        <div className="absolute inset-0 bg-black/80"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <span className="text-primary font-bold tracking-widest uppercase mb-6 block text-sm">About Us</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">
                            PT Agro Beans Global
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
                            AF Brother Group - Highland Coffee From North Sumatera
                        </p>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Who We Are</span>
                            <h2 className="text-4xl font-serif font-bold text-white">Professional Indonesian Coffee Exporter</h2>
                            <div className="w-24 h-1 bg-primary"></div>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                PT Agro Beans Global (AF Brother Group) is a professional Indonesian coffee exporting company dedicated to delivering premium-quality Arabica and Robusta coffee from the world-renowned coffee regions of North Sumatra and Aceh.
                            </p>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                We specialize in sourcing single-origin and specialty grade coffees from carefully selected smallholder farmers in Siborong-Borong, Sidikalang, and Gayo Highlands—regions internationally recognized for their distinctive flavor profiles, high altitudes, and rich volcanic soil.
                            </p>
                        </div>
                        <div className="h-[500px] bg-zinc-900 rounded-3xl overflow-hidden relative border border-white/5">
                            {!storyLoaded && (
                                <Skeleton className="absolute inset-0 rounded-none" />
                            )}
                            <Image
                                src="/images/hero/example-image.jpg"
                                alt="BORBORÉ team and coffee farm"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={`object-cover transition-opacity duration-500 ${storyLoaded ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={() => setStoryLoaded(true)}
                            />
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="py-24 bg-zinc-900 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="text-primary font-bold tracking-widest uppercase mb-6 block text-sm">Our Approach</span>
                            <h2 className="text-4xl font-serif font-bold text-white mb-8">Partnership-Based Sourcing Model</h2>
                            <p className="text-white/70 text-xl leading-relaxed font-light">
                                Through a strong partnership-based sourcing model, we directly connect local farmers with global markets ensuring traceability, sustainability, and consistent export-grade quality at every stage of the supply chain.
                            </p>
                            <div className="mt-8 p-8 bg-primary/10 rounded-2xl border border-primary/20">
                                <p className="text-primary text-2xl font-serif italic">
                                    "At PT Agro Beans Global, we believe premium coffee begins at the farm."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Vision */}
                        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Eye className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Vision</h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                To become a trusted global partner in supplying premium Indonesian coffee, recognized for consistent quality, ethical sourcing, and long-term value creation across international markets.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h3>
                            <ul className="space-y-4">
                                {missions.map((mission, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-white/70 text-sm leading-relaxed">{mission}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Production Locations */}
                <section className="py-24 bg-zinc-900 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Our Locations</span>
                            <h2 className="text-4xl font-serif font-bold text-white mb-4">Where We Operate</h2>
                            <p className="text-white/50">From highland farms to global markets</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <span className="text-primary text-sm font-bold uppercase tracking-widest">Head Office</span>
                                <h3 className="text-2xl font-serif text-white mt-4 mb-2 group-hover:text-primary transition-colors">Bekasi</h3>
                                <p className="text-white/60 leading-relaxed">
                                    West Java, Indonesia
                                </p>
                            </div>
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <span className="text-primary text-sm font-bold uppercase tracking-widest">Production</span>
                                <h3 className="text-2xl font-serif text-white mt-4 mb-2 group-hover:text-primary transition-colors">Siborong-Borong</h3>
                                <p className="text-white/60 leading-relaxed">
                                    North Tapanuli, North Sumatra & Aceh
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 text-center bg-black">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to Partner With Us?</h2>
                        <p className="text-white/60 mb-12 text-xl font-light">
                            Whether you're a large importer or a specialty roaster, we have the right beans for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/catalog">
                                <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-amber-600 text-black hover:text-white font-bold text-lg transition-all">
                                    Explore Our Coffee
                                </Button>
                            </Link>
                            <Link href="/export">
                                <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/30 text-white hover:bg-white hover:text-black font-bold text-lg transition-all">
                                    Request Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
