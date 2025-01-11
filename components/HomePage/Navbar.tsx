'use client'
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-900">
         
            <div className="flex justify-between items-center px-4 py-5 md:px-8">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none md:hidden"
                >
                    <div className="text-white font-bold text-lg md:hidden flex gap-2">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                        <span>Menu</span>
                    </div>


                </button>
            </div>

            {isOpen && (
                <div className="bg-gray-800 md:hidden">
                    <ul className="flex flex-col items-center space-y-6 pt-8 pb-4">
                        <li className="text-white font-bold">Home</li>
                        <li className="text-white font-bold">Movies</li>
                        <li className="text-white font-bold">TV Series</li>
                        <li className="text-white font-bold">Most Popular</li>
                        <li className="text-white font-bold">Top Airing</li>
                    </ul>
                </div>
            )}




            <div className="hidden md:flex justify-center space-x-10 pb-4 pt-10">
                <ul className="flex space-x-9">
                    <li className="text-white font-normal text-l cursor-pointer hover:text-gray-400">Home</li>
                    <li className="text-white font-normal text-base cursor-pointer hover:text-gray-400">Movies</li>
                    <li className="text-white font-normal text-base cursor-pointer hover:text-gray-400">TV Series</li>
                    <li className="text-white font-normal text-base cursor-pointer hover:text-gray-400">Most Popular</li>
                    <li className="text-white font-normal text-base cursor-pointer hover:text-gray-400">Top Airing</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
