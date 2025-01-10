'use client'

import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import { CircleArrowRight, Search } from "lucide-react";
import Logo from "../Logo";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const topSearches = [
    { name: "Solo Leveling Season 2: Aris", param: "solo-leveling" },
    { name: "Bogus Skill <<Fruitmaster>>", param: "bogus-skill" },
    { name: "Blue Lock", param: "blue-lock" },
    { name: "Dandadan", param: "dandadan" },
    { name: "One Piece", param: "one-piece" },
    { name: "Bleach: Thousand-Year Blood War", param: "bleach-thousand-year" },
  ];

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    if (query.trim()) {
      // Redirect to the search results page with query as keyword
      router.push(`/search?keyword=${query}`);
    }
  };




  return (

    <div className="bg-gray-900 flex justify-center items-center">
      <div className="relative md:rounded-3xl w-full max-w-[1350px] md:mx-4 bg-[#221c3d]">
        <Image
          src="https://hianime.to/images/anw-min.webp?v=0.1"
          alt="anihub"
          height={1000}
          width={800}
          className="absolute h-full md:object-fill lg:rounded-r-2xl top-0 object-cover right-0 opacity-30"
        />
        <section className="relative pb-7 md:py-16 md:pl-16 px-8 rounded-2xl z-10">
          <h1 className="font-bold text-white text-4xl">
           <div className="max-w-8 pl-16"><Logo/></div> 
          </h1>
          <form className="flex gap-2 md:mt-6 mt-3" onSubmit={handleSearch}>
            <Input
              placeholder="Search Anime ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-96 p-6 rounded-xl bg-white md:text-base"
            />
            <Button variant="outline" className="h-15 bg-red-300 hover:bg-red-200 rounded-xl">
              <Search size={28}/>
            </Button>
          </form>
          <div className="mt-7  w-96">
            <div className="flex flex-wrap gap-x-1">
            <span className="text-white pr-2">Top search:</span>
              {topSearches.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`/search?keyword=${item.param}`}
                    className="text-slate-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                  {index < topSearches.length - 1 && <span className="text-slate-300">,</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="md:mt-10 mt-5">
            <Link href={`/watch`}>
              <Button className="bg-red-300 rounded-xl md:rounded-lg text-black mx-auto md:px-11 md:py-7 py-7 text-xl hover:bg-red-200 w-full md:w-auto">Watch anime <CircleArrowRight size={28}  /></Button>
            </Link>
          </div>
        </section>
      </div>
    </div>

  );
}

export default Header;