'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Instagram, Building2 } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/TikTokIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi";
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n';

export function Footer() {
    const { language } = useLanguage();
    const t = translations.footer;

    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <Image
                                src="/logo.svg"
                                alt="BORBORÉ Logo"
                                width={140}
                                height={45}
                                className="h-11 w-auto mb-2"
                            />
                            <p className="text-xs text-white/40 mt-1">PT Agro Beans Global</p>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed font-light">
                            {language === 'en'
                                ? 'Highland Coffee From North Sumatera. Professional Indonesian coffee exporter delivering premium Arabica and Robusta from North Sumatra and Aceh.'
                                : 'Kopi Dataran Tinggi Dari Sumatera Utara. Eksportir kopi Indonesia profesional yang mengirimkan Arabika dan Robusta premium dari Sumatera Utara dan Aceh.'
                            }
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">{t.quickLinks[language]}</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/catalog" className="hover:text-primary transition-colors">{t.ourCoffee[language]}</Link></li>
                            <li><Link href="/export" className="hover:text-primary transition-colors">{t.exportSolutions[language]}</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">{t.aboutUs[language]}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">{t.contactUs[language]}</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <a target="_blank" href="mailto:borboreofficial.id@gmail.com" className="hover:text-primary transition-colors">
                                    borboreofficial.id@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <PiMicrosoftOutlookLogoDuotone className="h-4 w-4 text-primary" />
                                <a target="_blank" href="mailto:borboreofficial.id@outlook.com" className="hover:text-primary transition-colors">
                                    borboreofficial.id@outlook.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <WhatsAppIcon className="h-4 w-4 text-primary" />
                                <a target="_blank" href="https://wa.me/6285893689502" className="hover:text-primary transition-colors">
                                    +62 858-9368-9502
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Building2 className="h-4 w-4 mt-1 text-primary" />
                                <div>
                                    <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                                        {language === 'en' ? 'Head Office' : 'Kantor Pusat'}
                                    </span>
                                    <span>Bekasi, {language === 'en' ? 'West Java' : 'Jawa Barat'}, Indonesia</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 mt-1 text-primary" />
                                <div>
                                    <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                                        {language === 'en' ? 'Production' : 'Produksi'}
                                    </span>
                                    <span>{language === 'en' ? 'North Tapanuli, Siborong-Borong & Aceh' : 'Tapanuli Utara, Siborong-Borong & Aceh'}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">{t.followUs[language]}</h3>
                        <div className="flex flex-col space-y-3">
                            <a target='_blank' href="https://www.instagram.com/borbore.id" className="inline-flex items-center gap-3 px-4 py-3 bg-zinc-900 rounded-xl hover:bg-primary hover:text-white text-white/80 transition-all border border-white/5 group">
                                <Instagram className="h-5 w-5" />
                                <span className="text-sm font-medium">Instagram</span>
                            </a>
                            <a target='_blank' href="https://www.tiktok.com/@borboreofficial.id" className="inline-flex items-center gap-3 px-4 py-3 bg-zinc-900 rounded-xl hover:bg-primary hover:text-white text-white/80 transition-all border border-white/5 group">
                                <TikTokIcon className="h-5 w-5" />
                                <span className="text-sm font-medium">TikTok</span>
                            </a>

                        </div>
                        <div className="mt-8">
                            <p className="text-xs text-white/40 uppercase tracking-wider mb-2">{t.ourRegions[language]}</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">Siborong-Borong</span>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">Sidikalang</span>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">Mandailing</span>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">Gayo</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} PT Agro Beans Global (AF Brother Group). {language === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}</p>
                    <p className="mt-3 text-xs text-white/20">
                        {language === 'en' ? 'Developed by' : 'Dikembangkan oleh'}{' '}
                        <span className="text-white/30 font-medium">PanahTech</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
