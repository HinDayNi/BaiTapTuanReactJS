import React from 'react';
import img_Chefify from '../../assets/Screenshot 2025-03-10 112430.png';

const FooterSection = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className="1text-white hover:text-gray-300 transition-colors text-sm">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

function Footer() {
    return (
        <footer className="bg-[#1E1E1E] text-white">
            <div className="flex">
                <div className="px-6 md:px-10 py-12">
                    <div className="grid grid-cols-8 gap-8">
                        <div className="col-span-8 md:col-span-4 space-y-4">
                            <div>
                                <h3 className="text-lg font-bold !text-white mb-4">About Us</h3>
                                <p className="!text-white text-sm mb-4">
                                    Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                                </p>
                                <div className="flex space-x-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 !bg-white rounded text-sm !text-gray-800 focus:outline-none"
                                    />
                                    <button className="px-6 py-2 !bg-pink-500 !text-white rounded text-sm hover:bg-pink-600 transition-colors">
                                        Send
                                    </button>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 pt-20">
                                <img src={img_Chefify} alt="Chefify" className="h-12" />
                                <div className="text-sm !text-white">
                                    <div className="flex items-center space-x-5 mt-1">
                                        <span>2023 Chefify Company</span>
                                        <a href="#" className="hover:text-gray-300 transition-colors !text-white">Terms of Service</a>
                                        <span>|</span>
                                        <a href="#" className="hover:text-gray-300 transition-colors !text-white">Privacy Policy</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-8 md:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-lg font-bold !text-white mb-4">Learn More</h3>
                                <ul className="space-y-2">
                                    {["Our Cooks", "See Our Features", "FAQ"].map((item, index) => (
                                        <li key={index}>
                                            <a href="#" className="!text-white hover:text-gray-300 transition-colors text-sm">

                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold !text-white mb-4">Shop</h3>
                                <ul className="space-y-2">
                                    {["Gift Subscription", "Send Us Feedback"].map((item, index) => (
                                        <li key={index}>
                                            <a href="#" className="!text-white hover:text-gray-300 transition-colors text-sm">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-8 md:col-span-2">
                            <h3 className="text-lg font-bold text-white mb-4">Recipes</h3>
                            <ul className="space-y-2">
                                {[
                                    "What to Cook This Week",
                                    "Pasta",
                                    "Dinner",
                                    "Healthy",
                                    "Vegetarian",
                                    "Vegan",
                                    "Christmas"
                                ].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="!text-white hover:text-gray-300 transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;