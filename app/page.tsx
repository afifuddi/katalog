import Image from 'next/image';
import Link from 'next/link';
import { Globe, Leaf, Award, Mountain, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CountUp } from '@/components/ui/CountUp';
import { HeroImage } from '@/components/features/HeroImage';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/bg-hero.jpg"
              alt="Coffee beans background"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/65" />
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
                  Highland Coffee From North Sumatera
                </p>
              </div>

              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                PT Agro Beans Global (AF Brother Group) is a professional Indonesian coffee exporting company dedicated to delivering premium-quality Arabica and Robusta coffee from North Sumatra and Aceh.
              </p>

              <div className="flex items-center gap-4">
                <Link href="/catalog">
                  <Button className="rounded-full h-12 px-8 bg-primary hover:bg-amber-600 text-white border-none font-semibold text-base transition-all transform hover:scale-105 hover:cursor-pointer">
                    Browse Catalog
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full h-12 px-8 border-white/30 text-white hover:bg-white hover:text-black font-medium text-base hover:cursor-pointer">
                    Our Story
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8 border-t border-white/10 mt-8">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Coffee Origins</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp end={4} separator="," /> <span className="text-sm font-normal text-primary">Regions</span>
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Altitude Range</p>
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
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Our Commitment</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Export-Grade Quality</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Strict quality control from harvesting, post-harvest handling, grading, sorting, to export preparation in compliance with international standards.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Farmer Partnership</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Strong, transparent partnerships with smallholder farmers through sustainable sourcing practices and fair trade principles.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Global Export</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Professional export management, timely delivery, and customized coffee solutions for roasters, importers, and distributors worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section className="py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Our Origins</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Premium Coffee Regions</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                We source single-origin and specialty grade coffees from carefully selected smallholder farmers in Indonesia's most renowned coffee regions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Siborong-Borong</h3>
                <p className="text-white/40 text-sm mb-3">North Tapanuli</p>
                <p className="text-white/60 text-sm">700-1,700 masl • Sigararutang variety with herbal and spicy notes</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Sidikalang</h3>
                <p className="text-white/40 text-sm mb-3">Dairi Regency</p>
                <p className="text-white/60 text-sm">1,150-1,500 masl • Floral, fruity aromas with GI certification</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Mandailing</h3>
                <p className="text-white/40 text-sm mb-3">Mandailing Natal</p>
                <p className="text-white/60 text-sm">1,100-1,500 masl • Full body with herbal, floral, earthy aroma</p>
              </div>
              <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-1 duration-300">
                <Mountain className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">Gayo</h3>
                <p className="text-white/40 text-sm mb-3">Aceh</p>
                <p className="text-white/60 text-sm">900-1,700 masl • GI certified, exported to USA, Europe, Japan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Control Section */}
        <section className="py-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Quality Control</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Meeting International Standards</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Our operations are supported by strict quality control processes, from harvesting and post-harvest handling to grading, sorting, and export preparation, in compliance with international standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Lot Evaluation</h4>
                      <p className="text-white/50 text-sm">Each lot is carefully evaluated for moisture content, screen size, defect tolerance, and cupping profile.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Ethical Sourcing</h4>
                      <p className="text-white/50 text-sm">Empowering farmers with sustainable practices and fair trade principles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Professional Export</h4>
                      <p className="text-white/50 text-sm">Meeting expectations of roasters, importers, and distributors worldwide.</p>
                    </div>
                  </div>
                </div>
                <Link href="/catalog">
                  <Button className="rounded-full h-12 px-8 bg-primary hover:bg-amber-600 text-white font-semibold transition-all transform hover:scale-105">
                    Explore Our Coffee
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
