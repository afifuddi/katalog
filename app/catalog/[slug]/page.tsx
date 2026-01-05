import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, CheckCircle, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';

// Type mapping (matches JSON structure)
interface Product {
    id: string;
    slug: string;
    name: string;
    type: string;
    region: string;
    process: string;
    grade: string;
    moisture: string;
    altitude: string;
    sca: string;
    defects: string;
    desc: string;
    detailed_desc: string;
    image: string;
}

const products: Product[] = productsData;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductDetail({ params }: PageProps) {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col font-sans bg-black text-white">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                        <Link href="/catalog">
                            <Button>Back to Catalog</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-sans bg-black text-white">
            <Navbar />
            <main className="flex-grow py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/catalog" className="inline-flex items-center text-sm text-white/50 hover:text-primary mb-12 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog
                    </Link>

                    <div className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">
                        <div className="grid md:grid-cols-2">
                            {/* Image Section */}
                            <div className="bg-zinc-800 h-96 md:h-auto min-h-[600px] relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-16">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-primary font-bold uppercase tracking-widest text-sm">{product.type}</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/70 border border-white/10">{product.grade}</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{product.name}</h1>
                                <p className="text-xl text-white/70 mb-12 leading-relaxed font-light">
                                    {product.detailed_desc || product.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mb-12">
                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Region</span>
                                        <span className="font-serif text-xl">{product.region}</span>
                                    </div>
                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Processing</span>
                                        <span className="font-serif text-xl">{product.process}</span>
                                    </div>
                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Altitude</span>
                                        <span className="font-serif text-xl">{product.altitude}</span>
                                    </div>
                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Moisture</span>
                                        <span className="font-serif text-xl">{product.moisture}</span>
                                    </div>
                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                        <span className="block text-xs uppercase tracking-widest text-white/40 mb-2">Defect Rate</span>
                                        <span className="font-serif text-xl">{product.defects}</span>
                                    </div>
                                    <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                                        <span className="block text-xs uppercase tracking-widest text-primary mb-2">SCA Score</span>
                                        <span className="font-serif font-bold text-3xl text-primary">{product.sca}+</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button className="w-full h-14 bg-primary hover:bg-amber-600 rounded-full text-lg font-medium text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                                        Request Quote
                                    </Button>
                                    <Button variant="outline" className="w-full h-14 border-white/20 text-white hover:bg-white hover:text-black rounded-full font-medium transition-all">
                                        <Download className="mr-2 h-4 w-4" /> Download Specification Sheet
                                    </Button>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Recommended Uses</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-center text-white/60">
                                            <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                                            <span>Specialty Roasters</span>
                                        </li>
                                        <li className="flex items-center text-white/60">
                                            <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                                            <span>Espresso Blends</span>
                                        </li>
                                        <li className="flex items-center text-white/60">
                                            <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                                            <span>Single Origin Offerings</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
