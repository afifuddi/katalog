'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'CATALOG', href: '/catalog' },
        { name: 'EXPORT', href: '/export' },
        { name: 'ABOUT', href: '/about' },
    ];

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo (Mobile Only) */}
                    <div className="flex items-center md:hidden">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="BORBORÉ Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        <Link href="/" className="mr-8 cursor-pointer">
                            <Image
                                src="/logo.svg"
                                alt="BORBORÉ Logo"
                                width={150}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white/80 hover:text-primary text-xs font-semibold tracking-[0.15em] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/export"
                            className="px-6 py-2 bg-primary text-white rounded-full text-xs font-bold tracking-wider hover:bg-amber-600 transition-colors"
                        >
                            GET QUOTE
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-b border-white/10 shadow-2xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-3 text-sm font-bold tracking-widest text-white hover:text-primary border-b border-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/export"
                            className="block px-3 py-3 text-sm font-bold tracking-widest text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            GET QUOTE
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
