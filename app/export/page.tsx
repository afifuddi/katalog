import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Container, Truck, Anchor, FileText } from 'lucide-react';

export default function Export() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-black text-white">
            <Navbar />
            <main className="flex-grow">
                {/* Header */}
                <div className="bg-gradient-to-b from-zinc-900 to-black pt-32 pb-16 border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Logistics</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Global Export Solutions</h1>
                        <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
                            Comprehensive shipping solutions to deliver freshness from Indonesia to your destination.
                        </p>
                    </div>
                </div>

                {/* Key Info Grid */}
                <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Anchor className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">Port of Loading</h3>
                            <p className="text-white/60 leading-relaxed">Belawan (IDBLW) <br /> Tanjung Priok (IDTPP)</p>
                        </div>

                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Container className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">MOQ</h3>
                            <p className="text-white/60 leading-relaxed">18 tons <br /> (1 x 20ft Container)</p>
                        </div>

                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">Incoterms</h3>
                            <p className="text-white/60 leading-relaxed">FOB, CIF, CFR <br /> Negotiable</p>
                        </div>

                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Truck className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">Capacity</h3>
                            <p className="text-white/60 leading-relaxed">500 Tons / Month <br /> Consistent Supply</p>
                        </div>
                    </div>

                    {/* Detailed Info */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Shipping & Handling</h2>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    We take extra care in packaging to ensure the beans remain fresh during transit. Our standard packaging involves GrainPro bags inside jute bags to maintain moisture content and prevent contamination.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">Order Processing</h4>
                                        <p className="text-white/50">Orders are processed within 2-3 business days after confirmation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">Quality Check</h4>
                                        <p className="text-white/50">Final cupping and grading before stuffing into containers.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">Documents</h4>
                                        <p className="text-white/50">ICO Certificate, Bill of Lading, Phytosanitary, and Invoice provided promptly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10">
                            <h3 className="text-2xl font-serif font-bold text-white mb-8">Request a Quote</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Company Name</label>
                                    <input type="text" className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Enter company name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</label>
                                    <input type="email" className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Destination Port</label>
                                    <input type="text" className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white focus:outline-none focus:border-primary transition-colors" placeholder="e.g. Hamburg, Rotterdam" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Message</label>
                                    <textarea className="w-full rounded-xl border border-white/10 px-4 py-3 bg-black/50 text-white h-32 focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your requirements..."></textarea>
                                </div>
                                <Button className="w-full rounded-full bg-primary hover:bg-amber-600 h-12 font-bold text-black hover:text-white transition-all">Send Request</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
