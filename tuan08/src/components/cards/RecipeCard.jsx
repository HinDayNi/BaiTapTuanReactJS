import React from 'react';
import { ArrowRightIcon, ClockIcon, UserIcon, FireIcon } from '@heroicons/react/24/outline';

const RecipeCard = ({ title, description, author, tag, image, cookTime, servings, difficulty, isLarge = false }) => {
    return (
        <div className={`bg-white rounded-3xl ${isLarge ? 'p-8' : 'p-6'} shadow-sm ${isLarge ? 'w-full max-w-xl' : 'w-full'}`}>
            {/* Image */}
            {image && (
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Tag */}
            {tag && (
                <div className="mb-6">
                    <span className="bg-amber-400 text-sm font-medium px-4 py-1 rounded-full">
                        {tag}
                    </span>
                </div>
            )}

            {/* Title and Description */}
            <div className="mb-6">
                <h2 className={`${isLarge ? 'text-3xl' : 'text-xl'} font-bold mb-3 text-gray-800`}>{title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                </p>
            </div>

            {/* Recipe Info */}
            {(cookTime || servings || difficulty) && (
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    {cookTime && (
                        <div className="flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            <span>{cookTime}</span>
                        </div>
                    )}
                    {servings && (
                        <div className="flex items-center">
                            <UserIcon className="w-4 h-4 mr-1" />
                            <span>{servings} servings</span>
                        </div>
                    )}
                    {difficulty && (
                        <div className="flex items-center">
                            <FireIcon className="w-4 h-4 mr-1" />
                            <span>{difficulty}</span>
                        </div>
                    )}
                </div>
            )}

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

export default RecipeCard; 