import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const RecipeCard = ({ title, description, author, tag, authorImage }) => {
    return (
        <div className="!bg-white rounded-3xl p-6 shadow-lg max-w-sm relative">
            <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2">
                <span className="!bg-yellow-400 text-sm font-medium px-4 py-1 rounded-full">
                    {tag}
                </span>
            </div>

            <h2 className="text-2xl font-bold mb-3 !text-pink-500 mt-4">
                {title}
            </h2>

            <p className="!text-gray-600 text-sm leading-relaxed mb-8">
                {description}
            </p>

            <div className="flex items-center justify-center mb-5">
                <div className="flex items-center space-x-3">
                    {authorImage ? (
                        <img src={authorImage} alt={author} className="w-8 h-8 rounded-full object-cover" />
                    ) : (
                        <div className="w-8 h-8 rounded-full !bg-pink-100 flex items-center justify-center">
                            <span className="!text-pink-500 font-medium text-sm">
                                {author.charAt(0)}
                            </span>
                        </div>
                    )}
                    
                </div>
            </div>
            <span className="!text-gray-600 text-sm flex items-center justify-center mb-3">{author}</span>
            <div className="flex justify-center">
                <button className="!bg-pink-500 !text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors flex items-center space-x-2 mb-5">
                    <span>View now</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default RecipeCard; 