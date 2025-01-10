'use client'

import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter()

  const topSearches = [
    { name: "Solo Leveling Season 2: Aris", param: "solo-leveling" },
    { name: "Bogus Skill <<Fruitmaster>>", param: "bogus-skill" },
    { name: "Blue Lock", param: "blue-lock" },
    { name: "Dandadan", param: "dandadan" },
    { name: "One Piece", param: "one-piece" },
    { name: "Bleach: Thousand-Year Blood War", param: "bleach-thousand-year" },
  ];

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };


  return (

    <div className="bg-gray-900 flex justify-center items-center">
      <div className="relative rounded-3xl w-full max-w-[1350px] mx-4 bg-[#221c3d]">
        <Image
          src="https://hianime.to/images/anw-min.webp?v=0.1"
          alt="anihub"
          height={1000}
          width={800}
          className="absolute h-full rounded-r-2xl top-0 object-cover right-0 opacity-30"
        />
        <section className="relative py-16 pl-16  rounded-2xl z-10">
          <h1 className="font-bold text-white text-4xl">
            h<span className="text-fuchsia-600">!</span>anime
          </h1>
          <div className="flex gap-2 mt-6">
            <Input
              placeholder="Search Anime ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-80 p-6 rounded-xl bg-white"
            />
            <Button variant="outline" onClick={handleSearch} className="h-15 bg-red-300 hover:bg-red-200 rounded-xl">
              🔍
            </Button>
          </div>
          <div className="mt-7  w-96">
            <div className="flex flex-wrap gap-x-1">
            <span className="text-white pr-2">Top search:</span>
              {topSearches.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={`/search?query=${item.param}`}
                    className="text-slate-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                  {index < topSearches.length - 1 && <span className="text-slate-300">,</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link href={`/home`}>
              <Button className="bg-red-300 text-black px-9 py-7 text-xl hover:bg-red-200">Watch anime ➡</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>

  );
}

export default Header;