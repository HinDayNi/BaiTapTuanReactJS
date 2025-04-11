import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const SectionTitle = ({ title, viewAllText = 'View all', onViewAll }) => (
    <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {onViewAll && (
            <button 
                onClick={onViewAll}
                className="text-pink-500 font-medium hover:text-pink-600 transition-colors flex items-center space-x-2"
            >
                <span>{viewAllText}</span>
                <ArrowRightIcon className="w-4 h-4" />
            </button>
        )}
    </div>
);

export default SectionTitle; 