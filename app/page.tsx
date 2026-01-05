import Image from 'next/image';
import Link from 'next/link';
import { Globe, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CountUp } from '@/components/ui/CountUp';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION - Matching Reference */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          {/* Background Image: Coffee Beans */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-hero.jpg"
              alt="Coffee beans background"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 pt-20">
              <div>
                <h1 className="text-6xl md:text-8xl font-serif text-white font-bold leading-tight mb-4">
                  borbore
                  <span className="text-primary">.id</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
                  Premium Indonesian Coffee Exporter
                </p>
              </div>

              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Explore what Borbore has to bring and order yourself a customized coffee right to your warehouse without any worry. Every order you make is sourced and shipped the same week.
              </p>

              <div className="flex items-center gap-4">
                <Link href="/catalog">
                  <Button className="rounded-full h-12 px-8 bg-primary hover:bg-amber-600 text-white border-none font-semibold text-base transition-all transform hover:scale-105">
                    Browse Catalog
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full h-12 px-8 border-white/30 text-white hover:bg-white hover:text-black font-medium text-base">
                    Our Story
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8 border-t border-white/10 mt-8">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Total Exports</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    +<CountUp end={50} separator="," /> <span className="text-sm font-normal text-primary">Tons</span>
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Partner Farmers</p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    +<CountUp end={125} separator="," />
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Simple Elegant Cup */}
            <div className="relative hidden lg:block">
              {/* Soft Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-60" />

              <div className="relative z-10 w-[400px] h-[400px] mx-auto rounded-full border border-white/10 shadow-2xl shadow-black/50 overflow-hidden group">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=1035&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              </div>
            </div>
          </div>
        </section>

        {/* USP / Features Section - Semi-Dark */}
        <section className="py-24 bg-zinc-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Premium Quality</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Sourced from the best highlands. Every bean is rigorously graded to meet SCA specialty standards.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">100% Sustainable</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Direct trade with farmers ensures fair wages and environmentally friendly farming practices.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Global Shipping</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Seamless logistics to ports worldwide. We handle all documentation and freight arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
