'use client'
import Link from "next/link";
import { useState } from "react";


const links = [
    { name: 'Home', href: '/home' },
    { name: 'Movies', href: '/movie' },
    { name: 'TV Series', href: '/tv', },
    { name: 'Most Popular', href: '/most-popular', },
    { name: 'Top Airing', href: '/top-airing' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-900">

            <div className="flex justify-between items-center px-4 pt-5 md:px-8">
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
                    {links.map((link) => {
                        return (
                            <ul className="flex flex-col items-center space-y-6 pt-8 pb-4">
                                <Link key={link.name} href={link.href} className="text-white font-bold">{link.name}</Link>

                            </ul>
                        )
                    })}

                </div>
            )}



            <div className="hidden md:flex justify-center space-x-10 pt-10">
                {links.map((link) => {
                    return (

                        <ul className="flex space-x-9">
                            <li><Link key={link.name} href={link.href} className="text-white font-normal text-l cursor-pointer hover:text-gray-400">
                                {link.name}
                            </Link></li>

                        </ul>

                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
