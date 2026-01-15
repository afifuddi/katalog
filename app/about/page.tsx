'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/Skeleton';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function About() {
    const [heroLoaded, setHeroLoaded] = useState(false);
    const [storyLoaded, setStoryLoaded] = useState(false);
    const { language } = useLanguage();
    const t = translations.about;
    const missions = translations.missions[language];

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
                        <span className="text-primary font-bold tracking-widest uppercase mb-6 block text-sm">{t.aboutUs[language]}</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">
                            PT Agro Beans Global
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
                            {t.subtitle[language]}
                        </p>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t.whoWeAre[language]}</span>
                            <h2 className="text-4xl font-serif font-bold text-white">{t.professionalExporter[language]}</h2>
                            <div className="w-24 h-1 bg-primary"></div>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                {t.whoWeAreDesc1[language]}
                            </p>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                {t.whoWeAreDesc2[language]}
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
                            <span className="text-primary font-bold tracking-widest uppercase mb-6 block text-sm">{t.ourApproach[language]}</span>
                            <h2 className="text-4xl font-serif font-bold text-white mb-8">{t.partnershipModel[language]}</h2>
                            <p className="text-white/70 text-xl leading-relaxed font-light">
                                {t.ourApproachDesc[language]}
                            </p>
                            <div className="mt-8 p-8 bg-primary/10 rounded-2xl border border-primary/20">
                                <p className="text-primary text-2xl font-serif italic">
                                    &quot;{t.quote[language]}&quot;
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
                            <h3 className="text-3xl font-serif font-bold text-white mb-6">{t.ourVision[language]}</h3>
                            <p className="text-white/70 text-lg leading-relaxed">
                                {t.visionDesc[language]}
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Target className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-6">{t.ourMission[language]}</h3>
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
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">{t.ourLocations[language]}</span>
                            <h2 className="text-4xl font-serif font-bold text-white mb-4">{t.whereWeOperate[language]}</h2>
                            <p className="text-white/50">{t.fromFarmToGlobal[language]}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <span className="text-primary text-sm font-bold uppercase tracking-widest">{t.headOffice[language]}</span>
                                <h3 className="text-2xl font-serif text-white mt-4 mb-2 group-hover:text-primary transition-colors">Bekasi</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {language === 'en' ? 'West Java, Indonesia' : 'Jawa Barat, Indonesia'}
                                </p>
                            </div>
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <span className="text-primary text-sm font-bold uppercase tracking-widest">{t.production[language]}</span>
                                <h3 className="text-2xl font-serif text-white mt-4 mb-2 group-hover:text-primary transition-colors">Siborong-Borong</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {language === 'en' ? 'North Tapanuli, North Sumatra & Aceh' : 'Tapanuli Utara, Sumatera Utara & Aceh'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 text-center bg-black">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">{t.readyToPartner[language]}</h2>
                        <p className="text-white/60 mb-12 text-xl font-light">
                            {t.partnerDesc[language]}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/catalog">
                                <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-amber-600 text-black hover:text-white font-bold text-lg transition-all">
                                    {translations.home.exploreOurCoffee[language]}
                                </Button>
                            </Link>
                            <Link href="/export">
                                <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/30 text-white hover:bg-white hover:text-black font-bold text-lg transition-all">
                                    {translations.product.requestQuote[language]}
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
