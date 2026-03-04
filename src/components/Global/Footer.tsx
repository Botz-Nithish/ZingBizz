'use client';

import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const navCol1 = ['Home', 'About', 'Works'];
    const navCol2 = ['Blog', 'Careers', 'Contact Us'];

    const resources = [
        {
            items: [
                { category: 'Front-end Development', name: 'CSS-Tricks' },
                { category: 'Software Development', name: 'GitHub' },
                { category: 'Web Development Learning', name: 'Code Academy' },
                { category: 'Web Development Q&A', name: 'StackOverflow' },
            ],
        },
        {
            items: [
                { category: 'Modern Web Development', name: 'Web.dev' },
                { category: 'Full-Stack Development', name: 'DigitalOcean Community' },
                { category: 'UI/UX Design', name: 'Smashing Magazine' },
            ],
        },
        {
            items: [
                { category: 'Digital Marketing', name: 'HubSpot Academy' },
                { category: 'SEO', name: 'Moz Blog' },
                { category: 'Digital Marketing Resources', name: 'Sprout Social' },
                { category: 'SEO & Content Marketing', name: 'Ahrefs Blog' },
            ],
        },
    ];

    const socials = [
        { icon: FaLinkedinIn, label: 'LinkedIn' },
        { icon: FaInstagram, label: 'Instagram' },
        { icon: FaFacebookF, label: 'Facebook' },
        { icon: FaYoutube, label: 'YouTube' },
    ];

    return (
        <footer
            className="w-full"
            style={{ backgroundColor: '#021B2A', fontFamily: 'Urbanist' }}
        >
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px]">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-start justify-between pt-16 pb-10 gap-10 lg:gap-0">

                    {/* Logo */}
                    <div className="relative w-[180px] h-[40px]">
                        <Image
                            src="/assets/footerlogo.svg"
                            alt="Zingbizz Logo"
                            fill
                            className="object-contain object-left"
                            sizes="180px"
                        />
                    </div>

                    {/* Nav Links */}
                    <div className="flex gap-8 sm:gap-16 md:gap-28">
                        <ul className="flex flex-col gap-5">
                            {navCol1.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-white text-[16px] font-normal leading-[100%] tracking-[0] hover:text-white/70 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-5">
                            {navCol2.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-white text-[16px] font-normal leading-[100%] tracking-[0] hover:text-white/70 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Icons + Copyright */}
                    <div className="flex flex-col items-end gap-6">
                        <div className="flex gap-3">
                            {socials.map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-[28px] h-[28px] flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <Icon className="text-white text-[14px]" />
                                </a>
                            ))}
                        </div>
                        <p
                            className="text-white/60 text-right"
                            style={{ fontSize: '14px', fontWeight: 300, lineHeight: '100%' }}
                        >
                            © 2025 Zingbizz. All Rights Reserved
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/15" />

                {/* Useful Resources Section */}
                <div className="pt-10 pb-16">
                    <h3
                        className="text-white mb-8"
                        style={{ fontSize: '20px', fontWeight: 700, lineHeight: '100%' }}
                    >
                        Useful Resources
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resources.map((col, colIdx) => (
                            <div key={colIdx} className="flex flex-col gap-6">
                                {col.items.map((item, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <span
                                            className="text-[#84BEE3]"
                                            style={{ fontSize: '14px', fontWeight: 400, lineHeight: '100%' }}
                                        >
                                            {item.category}
                                        </span>
                                        <a
                                            href="#"
                                            className="text-white hover:text-white/70 transition-colors"
                                            style={{ fontSize: '16px', fontWeight: 500, lineHeight: '100%' }}
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

