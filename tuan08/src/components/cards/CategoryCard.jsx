import React from 'react';

const CategoryCard = ({ title, count, image }) => (
    <div className="group cursor-pointer">
        <div className="relative h-48 rounded-2xl overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 !text-white">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm opacity-90">{count} recipes</p>
            </div>
        </div>
    </div>
);

export default CategoryCard; 