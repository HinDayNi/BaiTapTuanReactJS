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
        tag: "Recipe of the day",
        cookTime: "20 min",
        servings: 4,
        difficulty: "Easy"
    };

    const categories = [
        { title: 'Breakfast', count: 12, image: 'src/assets/breakfast.jpg' },
        { title: 'Lunch', count: 15, image: 'src/assets/lunch.jpg' },
        { title: 'Dinner', count: 20, image: 'src/assets/dinner.jpg' },
        { title: 'Desserts', count: 8, image: 'src/assets/desserts.jpg' }
    ];

    const summerRecipes = [
        {
            title: "Fresh Summer Pasta",
            description: "Light and refreshing pasta with cherry tomatoes, basil, and olive oil.",
            author: "Chef Maria",
            image: "src/assets/summer-pasta.jpg",
            cookTime: "25 min",
            servings: 4,
            difficulty: "Medium"
        },
        {
            title: "Grilled Peach Salad",
            description: "Sweet grilled peaches with arugula and goat cheese.",
            author: "Chef John",
            image: "src/assets/peach-salad.jpg",
            cookTime: "15 min",
            servings: 2,
            difficulty: "Easy"
        },
        {
            title: "Lemon Sorbet",
            description: "Refreshing homemade lemon sorbet perfect for hot days.",
            author: "Chef Anna",
            image: "src/assets/lemon-sorbet.jpg",
            cookTime: "30 min",
            servings: 6,
            difficulty: "Easy"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[600px] mb-16">
                <img 
                    src={woman}
                    alt="Kitchen scene"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                    <div className="max-w-7xl mx-auto h-full px-6 md:px-10">
                        <div className="h-full flex items-center">
                            <RecipeCard {...featuredRecipe} isLarge={true} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Categories Section */}
                <div className="mb-16">
                    <SectionTitle 
                        title="Popular Categories" 
                        viewAllText="View all categories"
                        onViewAll={() => console.log('View all categories')}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <CategoryCard key={index} {...category} />
                        ))}
                    </div>
                </div>

                {/* Summer Recipes Section */}
                <div className="mb-16">
                    <SectionTitle 
                        title="This Summer Recipes" 
                        onViewAll={() => console.log('View all summer recipes')}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {summerRecipes.map((recipe, index) => (
                            <RecipeCard key={index} {...recipe} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
