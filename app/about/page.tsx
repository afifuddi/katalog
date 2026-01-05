import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-black text-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero */}
                <section className="relative py-32 md:py-48 bg-[url('https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2537&auto=format&fit=crop')] bg-cover bg-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/80"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <span className="text-primary font-bold tracking-widest uppercase mb-6 block text-sm">Our Mission</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">Empowering Farmers. <br /> Delighting the World.</h1>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto">
                            Borbore.id isn't just an exporter; we are a partner to thousands of smallholder farmers across Indonesia.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif font-bold text-white">Our Story</h2>
                            <div className="w-24 h-1 bg-primary"></div>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                Founded in 2020, Borbore.id began with a simple observation: Indonesian coffee is world-class, but the supply chain is often opaque and unfair to the farmers who work the hardest.
                            </p>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                We set out to build a transparent, direct-trade ecosystem. By working directly with cooperatives in Sumatra, Java, and Sulawesi, we ensure fair prices for farmers and consistent quality for our international buyers.
                            </p>
                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                Today, we export over 5,000 tons of premium beans annually to roasters in Europe, America, and Asia.
                            </p>
                        </div>
                        <div className="h-[500px] bg-zinc-900 rounded-3xl overflow-hidden relative border border-white/5">
                            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-white/20">
                                {/* Image Placeholder */}
                                Team / Farm Image
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="bg-zinc-900 py-24 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-serif font-bold text-white mb-4">Core Values</h2>
                            <p className="text-white/50">The principles that guide every decision we make.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">Transparency</h3>
                                <p className="text-white/60 leading-relaxed">
                                    We believe in open books. From farm gate prices to shipping costs, we maintain complete transparency with our partners.
                                </p>
                            </div>
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">Sustainability</h3>
                                <p className="text-white/60 leading-relaxed">
                                    We invest in climate-resilient farming techniques and ensure our operations leave a positive impact on the environment.
                                </p>
                            </div>
                            <div className="bg-black p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">Quality</h3>
                                <p className="text-white/60 leading-relaxed">
                                    No compromise. Every batch is cupped and graded by Q-Graders to ensure it meets our strict standards.
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
                        <Link href="/catalog">
                            <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-amber-600 text-black hover:text-white font-bold text-lg transition-all">Explore Our Coffee</Button>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
