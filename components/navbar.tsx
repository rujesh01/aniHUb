"use client";
import Link from "next/link";
import {
  FaBars,
  FaDiscord,
  FaTelegram,
  FaReddit,
  FaTwitter,
  FaRandom,
  FaComments,
  FaSearch,
} from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { useState, useEffect } from "react";
import NavSidebar from "./NavSidebar";
import { Input } from "./ui/input";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [animeLanguage, setAnimeLanguage] = useState("EN");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark bg-opacity-70 backdrop-blur-md shadow-md"
            : "bg-gray-900"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <button
              className="text-white hover:text-primary focus:outline-none"
              onClick={handleSidebarToggle}
            >
              <FaBars className="w-6 h-6" />
            </button>
            <Link href={"/"} className="text-3xl font-bold flex items-center">
              <span className="text-white">Ani</span>
              <span className="text-blue-500">Hub</span>
            </Link>
          </div>

          {/* Center Section */}
          <div className="relative flex items-center space-x-3 w-full max-w-md">
            <div className="hidden sm:block relative w-full items-center">
              <Input
                type="text"
                placeholder="Search for anime..."
                className="py-2 px-3 bg-white text-gray-800 border border-gray-300 focus:outline-none w-full"
              />
              <div className="absolute right-2 top-0 bottom-0 flex items-center space-x-2">
                <FaSearch className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-800" />
                <button className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                  Filter
                </button>
              </div>
            </div>

            <div className="hidden sm:flex items-center space-x-3 ml-4">
              <Link href="#" className="text-[#5865F2] hover:text-primary">
                <FaDiscord className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#0088cc] hover:text-primary">
                <FaTelegram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#FF4500] hover:text-primary">
                <FaReddit className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#1DA1F2] hover:text-primary">
                <FaTwitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <Link
                href="/watch2gether"
                className="hidden md:flex flex-col items-center text-white hover:text-[#FFBADE]"
              >
                <MdGroups className="w-6 h-6 text-[#FFBADE]" />
                <span className="hover:text-[#FFBADE]">Watch2gether</span>
              </Link>
              <Link
                href="/random"
                className="flex flex-col items-center text-white hover:text-[#FFBADE]"
              >
                <FaRandom className="w-6 h-6 text-[#FFBADE]" />
                <span className="hover:text-[#FFBADE]">Random</span>
              </Link>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <button
                    className={`px-2 py-1 rounded text-sm ${
                      animeLanguage === "EN"
                        ? "bg-[#FFBADE] text-gray-700"
                        : "bg-gray-800 text-gray-400"
                    }`}
                    onClick={() => setAnimeLanguage("EN")}
                  >
                    EN
                  </button>
                  <button
                    className={`px-2 py-1 rounded text-sm ${
                      animeLanguage === "JP"
                        ? "bg-[#FFBADE] text-gray-700"
                        : "bg-gray-800 text-gray-400"
                    }`}
                    onClick={() => setAnimeLanguage("JP")}
                  >
                    JP
                  </button>
                </div>
                <span className="text-gray-400 text-xs hover:text-[#FFBADE]">
                  Anime Name
                </span>
              </div>
              <Link
                href="/community"
                className="hidden md:flex flex-col items-center text-white hover:text-[#FFBADE]"
              >
                <FaComments className="w-6 h-6 text-[#FFBADE]" />
                <span className="hover:text-[#FFBADE]">Community</span>
              </Link>
            </div>

            <Link
              href="/login"
              className="px-4 py-2 bg-[#FFBADE] text-black text-sm font-semibold rounded-md"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <NavSidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </>
  );
}
