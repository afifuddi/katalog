import Link from 'next/link';
import { Coffee, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <span className="font-serif font-bold text-2xl text-white tracking-widest">BORBORE</span>
                        </div>
                        <p className="text-sm text-white/60 leading-relaxed font-light">
                            Connecting Indonesian farmers with the global market. Authentic, sustainable, and high-quality coffee beans.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/catalog" className="hover:text-primary transition-colors">Catalog</Link></li>
                            <li><Link href="/export" className="hover:text-primary transition-colors">Logistics</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>hello@borbore.id</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 mt-1 text-primary" />
                                <span>Medan, North Sumatra, Indonesia</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a target='_blank' href="https://www.instagram.com/borbore.id" className="p-3 bg-zinc-900 rounded-full hover:bg-primary hover:text-white text-white/80 transition-all border border-white/5">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/company/borbore-id/" className="p-3 bg-zinc-900 rounded-full hover:bg-primary hover:text-white text-white/80 transition-all border border-white/5">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} Borbore.id. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
