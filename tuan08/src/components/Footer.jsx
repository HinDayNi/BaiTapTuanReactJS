import React, { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const FooterSection = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
        <ul className="space-y-3">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed with:', email);
        setEmail('');
    };

    const footerSections = [
        {
            title: "About Us",
            links: ["Our Story", "Team", "Careers", "Contact Us"]
        },
        {
            title: "Recipes",
            links: ["Latest Recipes", "Popular Recipes", "Quick & Easy", "Seasonal"]
        },
        {
            title: "Help",
            links: ["FAQs", "Privacy Policy", "Terms of Service", "Support"]
        }
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
                {/* Newsletter Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Get recipes inspiration
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Subscribe to our newsletter and receive the latest recipe updates directly to your inbox.
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-pink-500"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 !bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors flex items-center gap-2"
                            >
                                <span>Subscribe</span>
                                <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="text-center md:text-right">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Follow us</h3>
                            <div className="flex gap-4 justify-center md:justify-end">
                                {['Facebook', 'Twitter', 'Instagram', 'Pinterest'].map((social, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-gray-600 hover:text-pink-500 transition-colors"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {footerSections.map((section, index) => (
                        <FooterSection key={index} {...section} />
                    ))}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Download App</h3>
                        <div className="space-y-3">
                            <button className="w-full px-6 py-3 !bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                                App Store
                            </button>
                            <button className="w-full px-6 py-3 !bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                                Google Play
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600">
                            © 2024 Chefify. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 