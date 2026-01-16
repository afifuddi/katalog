'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container, Truck, Anchor, FileText, Shield, Leaf, Award } from 'lucide-react';
import { QuoteForm } from '@/components/features/QuoteForm';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export default function Export() {
    const { language } = useLanguage();
    const t = translations.export;

    return (
        <div className="min-h-screen flex flex-col font-sans bg-black text-white">
            <Navbar />
            <main className="flex-grow">
                {/* Header */}
                <div className="bg-gradient-to-b from-zinc-900 to-black pt-32 pb-16 border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">{t.exportSolutions[language]}</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">{t.title[language]}</h1>
                        <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed">
                            {t.description[language]}
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
                            <h3 className="font-serif font-bold text-xl mb-3">{t.portOfLoading[language]}</h3>
                            <p className="text-white/60 leading-relaxed">Belawan (IDBLW) <br /> Tanjung Priok (IDTPP)</p>
                        </div>

                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Container className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">{t.moq[language]}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">{t.moqValue[language]}</p>
                        </div>

                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">{t.incoterms[language]}</h3>
                            <p className="text-white/60 leading-relaxed text-xs">
                                {t.incotermsFOB[language]}<br />
                                {t.incotermsCIF[language]}<br />
                                {t.incotermsCFR[language]}
                            </p>
                        </div>

                        <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Truck className="h-7 w-7" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-3">{t.supplyRegions[language]}</h3>
                            <p className="text-white/60 leading-relaxed">{language === 'en' ? 'North Sumatra' : 'Sumatera Utara'} <br /> Aceh</p>
                        </div>
                    </div>

                    {/* Quality Control Section */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">{t.qualityControl[language]}</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{t.meetingIntlStandards[language]}</h2>
                            <p className="max-w-3xl mx-auto text-white/60 text-lg">
                                {language === 'en'
                                    ? 'Our operations are supported by strict quality control processes, from harvesting and post-harvest handling to grading, sorting, and export preparation, in compliance with international standards.'
                                    : 'Operasional kami didukung oleh proses kontrol kualitas ketat, mulai dari panen hingga persiapan ekspor sesuai standar internasional.'
                                }
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                                <Shield className="h-10 w-10 text-primary mb-6" />
                                <h3 className="font-serif font-bold text-xl text-white mb-4">{language === 'en' ? 'Lot Evaluation' : 'Evaluasi Lot'}</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {language === 'en'
                                        ? 'Each lot is carefully evaluated to meet buyer specifications, including moisture content, screen size, defect tolerance, and cupping profile.'
                                        : 'Setiap lot dievaluasi secara cermat untuk memenuhi spesifikasi pembeli, termasuk kadar air, ukuran biji, toleransi cacat, dan profil cupping.'
                                    }
                                </p>
                            </div>
                            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                                <Leaf className="h-10 w-10 text-primary mb-6" />
                                <h3 className="font-serif font-bold text-xl text-white mb-4">{language === 'en' ? 'Ethical Sourcing' : 'Pengadaan Etis'}</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {language === 'en'
                                        ? 'Empowering farmers with sustainable sourcing practices and fair trade principles for long-term community development.'
                                        : 'Memberdayakan petani dengan praktik pengadaan berkelanjutan dan prinsip perdagangan adil demi pengembangan komunitas jangka panjang.'
                                    }
                                </p>
                            </div>
                            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                                <Award className="h-10 w-10 text-primary mb-6" />
                                <h3 className="font-serif font-bold text-xl text-white mb-4">{language === 'en' ? 'Traceability' : 'Ketertelusuran'}</h3>
                                <p className="text-white/60 leading-relaxed">
                                    {language === 'en'
                                        ? 'Full traceability from farm to port, with documented lot information for every shipment.'
                                        : 'Ketertelusuran penuh dari kebun hingga pelabuhan, dengan informasi lot terdokumentasi untuk setiap pengiriman.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Info */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">{t.exportProcess[language]}</h2>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    {language === 'en'
                                        ? 'We take extra care in packaging to ensure the beans remain fresh during transit. Our standard packaging involves GrainPro bags inside jute bags to maintain moisture content and prevent contamination.'
                                        : 'Kami memberikan perhatian ekstra pada pengemasan untuk memastikan biji kopi tetap segar selama transit. Standar pengemasan kami menggunakan kantong GrainPro di dalam karung goni untuk menjaga kadar air dan mencegah kontaminasi.'
                                    }
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 font-bold text-xl">1</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">{t.orderProcessing[language]}</h4>
                                        <p className="text-white/50">{t.orderProcessingDesc[language]}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 font-bold text-xl">2</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">{t.qualityCheck[language]}</h4>
                                        <p className="text-white/50">{t.qualityCheckDesc[language]}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center flex-shrink-0 font-bold text-xl">3</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-white">{t.documentation[language]}</h4>
                                        <p className="text-white/50">{t.documentationDesc[language]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <QuoteForm />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
