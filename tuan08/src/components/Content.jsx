import React from 'react';
import RecipeCard from './cards/RecipeCard';
import CategoryCard from './cards/CategoryCard';
import SectionTitle from './common/SectionTitle';
import woman from '../assets/woman.png';

function Content() {
    const featuredRecipe = {
        title: "Salad Caprese",
        description: "Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.",
        author: "Salad Caprese",
        authorImage: "/src/assets/avatar.png",
        tag: "Recipe of the day",
        cookTime: "20 min",
        servings: 4,
        difficulty: "Easy"
    };

    const categories = [
        { title: 'Breakfast', count: 12, image: 'src/assets/Italian-style tomato.png' },
        { title: 'Lunch', count: 15, image: 'src/assets/Lotus delight salad_01.png' },
        { title: 'Dinner', count: 20, image: 'src/assets/Lotus delight salad.png' },
        { title: 'Desserts', count: 8, image: 'src/assets/Salad with cabbage.png' }
    ];

    const summerRecipes = [
        {
            title: "Fresh Summer Pasta",
            description: "Light and refreshing pasta with cherry tomatoes, basil, and olive oil.",
            author: "Chef Maria",
            image: "src/assets/Italian-style tomato.png",
            cookTime: "25 min",
            servings: 4,
            difficulty: "Medium"
        },
        {
            title: "Grilled Peach Salad",
            description: "Sweet grilled peaches with arugula and goat cheese.",
            author: "Chef John",
            image: "src/assets/Italian-style tomato.png",
            cookTime: "15 min",
            servings: 2,
            difficulty: "Easy"
        },
        {
            title: "Lemon Sorbet",
            description: "Refreshing homemade lemon sorbet perfect for hot days.",
            author: "Chef Anna",
            image: "src/assets/Bean, shrimp, and potato salad.jpg",
            cookTime: "30 min",
            servings: 6,
            difficulty: "Easy"
        }
    ];

    return (
        <div className="!bg-gray-50 w-full">
            <div className="relative w-full">
                <img
                    src={woman}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 !bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                    <div className="max-w-[1440px] mx-auto h-full px-20">
                        <div className="h-full flex items-center">
                            <RecipeCard {...featuredRecipe} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="!w-full !bg-white">
                <div className="px-20 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-[44px] font-bold !text-pink-500 mb-3">This Summer Recipes</h2>
                        <p className="!text-gray-600 text-[20px]">We have all your Independence Day sweets covered.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="relative aspect-square">
                                <img src="src/assets/Italian-style tomato.png" alt="Italian-style tomato" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-base">Italian-style tomato salad</h3>
                                    <button className="!text-pink-500">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="!text-pink-500 text-sm mt-2">15 minutes</p>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="relative aspect-square">
                                <img src="src/assets/Vegetable and shrimp spaghetti.png" alt="Spaghetti with vegetables" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm">Spaghetti with vegetables and shrimp</h3>
                                    <button className="!text-pink-500">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="!text-pink-500 text-xs mt-1 flex items-start">25 minutes</p>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="relative aspect-square">
                                <img src="src/assets/Lotus delight salad.png" alt="Lotus delight salad" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm">Lotus delight salad</h3>
                                    <button className="!text-pink-500">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="!text-pink-500 text-xs mt-1 flex items-start">20 minutes</p>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="relative aspect-square">
                                <img src="src/assets/Snack cakes.png" alt="Snack cakes" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm">Snack cakes</h3>
                                    <button className="!text-pink-500">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="!text-pink-500 text-xs mt-1 flex items-start">21 minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="!w-full !bg-gray-50">
                <div className="px-20 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-[2.75rem] font-bold !text-pink-500 mb-3">Recipes With Videos</h2>
                        <p className="!text-gray-600 text-lg">Cooking Up Culinary Creations with Step-by-Step Videos</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-square">
                                <img src="src/assets/Salad with cabbage.png" alt="Salad with cabbage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm group-hover:text-pink-500 transition-colors duration-300">Salad with cabbage and shrimp</h3>
                                    <button className="!text-pink-500 hover:scale-110 transition-transform duration-300">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <p className="!text-pink-500 text-xs">32 minutes</p>
                                    <span className="text-gray-400">•</span>
                                    <p className="text-gray-600 text-xs">4 servings</p>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-square">
                                <img src="src/assets/Bean, shrimp, and potato salad.png" alt="Salad of cove beans" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm group-hover:text-pink-500 transition-colors duration-300">Salad of cove beans, shrimp and potatoes</h3>
                                    <button className="!text-pink-500 hover:scale-110 transition-transform duration-300">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <p className="!text-pink-500 text-xs">20 minutes</p>
                                    <span className="text-gray-400">•</span>
                                    <p className="text-gray-600 text-xs">2 servings</p>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-square">
                                <img src="src/assets/Sunny-side up fried eggs.png" alt="Sunny-side up fried eggs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm group-hover:text-pink-500 transition-colors duration-300">Sunny-side up fried eggs</h3>
                                    <button className="!text-pink-500 hover:scale-110 transition-transform duration-300">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <p className="!text-pink-500 text-xs">15 minutes</p>
                                    <span className="text-gray-400">•</span>
                                    <p className="text-gray-600 text-xs">1 serving</p>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-square">
                                <img src="src/assets/Vegetable and shrimp spaghetti.png" alt="Spaghetti with vegetables" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                                    <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="!text-gray-800 font-medium text-sm group-hover:text-pink-500 transition-colors duration-300">Spaghetti with vegetables and shrimp</h3>
                                    <button className="!text-pink-500 hover:scale-110 transition-transform duration-300">
                                        <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <p className="!text-pink-500 text-xs">25 minutes</p>
                                    <span className="text-gray-400">•</span>
                                    <p className="text-gray-600 text-xs">3 servings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full !bg-white">
                <div className="px-20 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-[44px] font-bold !text-pink-500 mb-3">Editor's pick</h2>
                        <p className="!text-gray-600 text-[20px]">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm p-6">
                            <div className="flex gap-6">
                                <div className="w-48 h-48">
                                    <img src="src/assets/Stuffed sticky rice ball.png" alt="Stuffed sticky rice ball" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="!text-gray-800 text-xl font-medium">Stuffed sticky rice ball</h3>
                                        <button className="!text-pink-500">
                                            <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <p className="!text-pink-500 text-sm mb-4">34 minutes</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src="src/assets/avatar.png" alt="Jennifer" className="w-8 h-8 rounded-full" />
                                        <span className="text-base text-gray-600">Jennifer King</span>
                                    </div>
                                    <p className="text-base text-gray-600 leading-relaxed">Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...</p>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm p-6">
                            <div className="flex gap-6">
                                <div className="w-48 h-48">
                                    <img src="src/assets/Strawberry smoothie.png" alt="Strawberry smoothie" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="!text-gray-800 text-xl font-medium">Strawberry smoothie</h3>
                                        <button className="!text-pink-500">
                                            <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <p className="!text-pink-500 text-sm mb-4">40 minutes</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src="src/assets/avatar.png" alt="Matthew" className="w-8 h-8 rounded-full" />
                                        <span className="text-base text-gray-600">Matthew Martinez</span>
                                    </div>
                                    <p className="text-base text-gray-600 leading-relaxed">Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...</p>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm p-6">
                            <div className="flex gap-6">
                                <div className="w-48 h-48">
                                    <img src="src/assets/Latte Art.png" alt="Latte Art" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="!text-gray-800 text-xl font-medium">Latte Art</h3>
                                        <button className="!text-pink-500">
                                            <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <p className="!text-pink-500 text-sm mb-4">18 minutes</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src="src/assets/avatar.png" alt="Sarah" className="w-8 h-8 rounded-full" />
                                        <span className="text-base text-gray-600">Sarah Hill</span>
                                    </div>
                                    <p className="text-base text-gray-600 leading-relaxed">Latte art is the skillful craft of creating captivating designs on the surface of a latte...</p>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white rounded-xl overflow-hidden shadow-sm p-6">
                            <div className="flex gap-6">
                                <div className="w-48 h-48">
                                    <img src="src/assets/Butter fried noodles.png" alt="Butter fried noodles" className="w-full h-full object-cover rounded-xl" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="!text-gray-800 text-xl font-medium">Butter fried noodles</h3>
                                        <button className="!text-pink-500">
                                            <img src="src/assets/Icon Button 73.png" alt="bookmark" className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <p className="!text-pink-500 text-sm mb-4">16 minutes</p>
                                    <div className="flex items-center gap-3 mb-4">
                                        <img src="src/assets/avatar.png" alt="Julia" className="w-8 h-8 rounded-full" />
                                        <span className="text-base text-gray-600">Julia Lopez</span>
                                    </div>
                                    <p className="text-base text-gray-600 leading-relaxed">Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
