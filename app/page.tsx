'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Leaf, Award, Mountain, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CountUp } from '@/components/ui/CountUp';
import { HeroImage } from '@/components/features/HeroImage';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function Home() {
  const { language } = useLanguage();
  const t = translations.home;
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          {/* Background Video + Fallback Image */}
          <div className="absolute inset-0 z-0">
            {/* Fallback Image - shows while video loading */}
            <Image
              src="/hero/bg-hero.png"
              alt="Coffee beans background"
              fill
              priority
              className={`object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
              quality={90}
            />

            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <source src="/hero/bg-hero.webm" type="video/webm" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 pt-20">
              <div>
                <h1 className="text-6xl md:text-8xl font-serif text-white font-bold leading-tight mb-4">
                  BORBORÉ
                  <span className="text-primary">.id</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
                  {t.tagline[language]}
                </p>
              </div>

              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                {t.description[language]}
              </p>

              <div className="flex items-center gap-4">
                <Link href="/catalog">
                  <Button className="rounded-full h-12 px-8 bg-primary hover:bg-amber-600 text-white border-none font-semibold text-base transition-all transform hover:scale-105">
                    {t.browseCatalog[language]}
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full h-12 px-8 border-white/30 text-white hover:bg-white hover:text-black font-medium text-base">
                    {t.ourStory[language]}
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8 border-t border-white/10 mt-8">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t.coffeeOrigins[language]}</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp end={4} separator="," /> <span className="text-sm font-normal text-primary">{t.regions[language]}</span>
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t.altitudeRange[language]}</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp end={1700} separator="," /> <span className="text-sm font-normal text-primary">masl</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <HeroImage />
          </div>
        </section>

        {/* USP / Features Section */}
        <section className="py-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">{t.whyChooseUs[language]}</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{t.ourCommitment[language]}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{t.exportGradeQuality[language]}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {t.exportGradeQualityDesc[language]}
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{t.farmerPartnership[language]}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {t.farmerPartnershipDesc[language]}
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{t.globalExport[language]}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {t.globalExportDesc[language]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section className="py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">{t.ourOrigins[language]}</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.premiumCoffeeRegions[language]}</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                {t.originsDesc[language]}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Siborong-Borong</h3>
                <p className="text-white/40 text-sm mb-3">{language === 'en' ? 'North Tapanuli' : 'Tapanuli Utara'}</p>
                <p className="text-white/60 text-sm">700-1,700 masl • {language === 'en' ? 'Sigararutang variety with herbal and spicy notes' : 'Varietas Sigararutang dengan nota herbal dan rempah'}</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Sidikalang</h3>
                <p className="text-white/40 text-sm mb-3">{language === 'en' ? 'Dairi Regency' : 'Kabupaten Dairi'}</p>
                <p className="text-white/60 text-sm">1,150-1,500 masl • {language === 'en' ? 'Floral, fruity aromas with clean aftertaste' : 'Aroma floral, fruity dengan aftertaste bersih'}</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Mandailing</h3>
                <p className="text-white/40 text-sm mb-3">Mandailing Natal</p>
                <p className="text-white/60 text-sm">1,100-1,500 masl • {language === 'en' ? 'Full body with herbal, floral, earthy aroma' : 'Full body dengan aroma herbal, floral, earthy'}</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Gayo</h3>
                <p className="text-white/40 text-sm mb-3">Aceh</p>
                <p className="text-white/60 text-sm">900-1,700 masl • {language === 'en' ? 'GI certified, exported to USA, Europe, Japan' : 'Bersertifikat IG, diekspor ke AS, Eropa, Jepang'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control Section */}
        <section className="py-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">{t.qualityControl[language]}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">{t.meetingIntlStandards[language]}</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {t.qualityControlDesc[language]}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{t.lotEvaluation[language]}</h4>
                      <p className="text-white/50 text-sm">{t.lotEvaluationDesc[language]}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{t.ethicalSourcing[language]}</h4>
                      <p className="text-white/50 text-sm">{t.ethicalSourcingDesc[language]}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{t.professionalExport[language]}</h4>
                      <p className="text-white/50 text-sm">{t.professionalExportDesc[language]}</p>
                    </div>
                  </div>
                </div>
                <Link href="/catalog">
                  <Button className="rounded-full h-12 px-8 bg-primary hover:bg-amber-600 text-white font-semibold transition-all transform hover:scale-105">
                    {t.exploreOurCoffee[language]}
                  </Button>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/5">
                <Image
                  src="/images/hero/example-image.jpg"
                  alt="Quality Control Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
