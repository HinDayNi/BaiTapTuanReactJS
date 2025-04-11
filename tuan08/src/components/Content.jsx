import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const RecipeCard = ({ title, description, author, tag }) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm max-w-md">
            {/* Tag */}
            <div className="mb-6">
                <span className="bg-amber-400 text-sm font-medium px-4 py-1 rounded-full">
                    {tag}
                </span>
            </div>

            {/* Title and Description */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Author and Action */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-500 font-medium">
                            {author.charAt(0)}
                        </span>
                    </div>
                    <span className="text-gray-600 font-medium">{author}</span>
                </div>
                <button className="flex items-center space-x-2 text-pink-500 font-medium hover:text-pink-600 transition-colors">
                    <span>View now</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

function Content() {
    const featuredRecipe = {
        title: "Salad Caprese",
        description: "Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.",
        author: "Salad Caprese",
        tag: "Recipe of the day"
    };

    return (
        <div className="pt-20 px-6 md:px-10">
            {/* Main Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Featured Recipe */}
                <div className="flex items-center">
                    <RecipeCard {...featuredRecipe} />
                </div>

                {/* Right Column - Image */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                        alt="Kitchen scene"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Popular Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Breakfast', 'Lunch', 'Dinner', 'Desserts'].map((category, index) => (
                        <div 
                            key={index}
                            className="bg-gray-100 rounded-2xl p-6 hover:bg-gray-200 transition-colors cursor-pointer"
                        >
                            <h3 className="text-lg font-medium text-gray-800">{category}</h3>
                            <p className="text-sm text-gray-600 mt-1">12 recipes</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;
