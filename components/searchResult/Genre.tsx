import { useState } from "react";

const categories = [
    { name: "Action", color: "text-green-400" },
    { name: "Adventure", color: "text-pink-400" },
    { name: "Cars", color: "text-red-400" },
    { name: "Comedy", color: "text-yellow-400" },
    { name: "Dementia", color: "text-blue-600" },
    { name: "Demons", color: "text-indigo-400" },
    { name: "Drama", color: "text-teal-400" },
    { name: "Ecchi", color: "text-orange-400" },
    { name: "Fantasy", color: "text-purple-400" },
    { name: "Game", color: "text-pink-500" },
    { name: "Harem", color: "text-cyan-400" },
    { name: "Historical", color: "text-lime-400" },
    { name: "Horror", color: "text-rose-400" },
    { name: "Isekai", color: "text-emerald-400" },
    { name: "Josei", color: "text-fuchsia-400" },
    { name: "Kids", color: "text-amber-400" },
    { name: "Magic", color: "text-sky-400" },
    { name: "Martial Arts", color: "text-blue-400" },
    { name: "Mecha", color: "text-green-500" },
    { name: "Military", color: "text-indigo-500" },
    { name: "Music", color: "text-pink-600" },
    { name: "Mystery", color: "text-purple-600" },
    { name: "Parody", color: "text-red-500" },
    { name: "Police", color: "text-teal-500" },
];

const Genre = () => {
    const [showAll, setShowAll] = useState(false);

    // Limit categories initially
    const displayedCategories = showAll ? categories : categories.slice(0, 21);

    return (
        <div className="mx-4">
            <h1 className="font-bold text-xl text-pink-300 py-6">Genres</h1>
        <div className=" bg-slate-800">
            {/* Category Grid */}
            <div className="grid grid-cols-3 justify-between p-4">
                {displayedCategories.map((category, index) => (
                    <span
                        key={index}
                        className={`text-base font-medium cursor-pointer px-3 py-1 rounded-lg text-center bg-opacity-20 hover: ${category.color
                            }`}
                    >
                        {category.name}
                    </span>
                ))}
            </div>

            {/* Show More Button */}
            <div className="mt-4 text-center pb-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mx-4 px-6 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600 w-max"
                >
                    {showAll ? "Show less" : "Show more"}
                </button>
            </div>
        </div>
        </div>
    );
}

export default Genre;