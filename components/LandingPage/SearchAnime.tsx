'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Header = () => {
  const [query, setQuery] = useState("");
  const router = useRouter()

  const topSearches = [
    { name: "Solo Leveling", param: "solo-leveling" },
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

    <div className="bg-gray-900 flex justify-center items-center min-h-screen ">
      <div className="relative rounded-2xl bg-gray-500 w-full mx-4">
        <img
          src="https://hianime.to/images/anw-min.webp?v=0.1"
          alt="anihub"
          className="absolute h-full rounded-r-2xl object-cover top-0  right-0"
        />
        <section className="relative py-14 px-6 bg-gray-800 bg-opacity-80 rounded-2xl z-10">
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
          <div className="mt-4">
            <span className="text-white">Top search:</span>
            {topSearches.map((item, index) => (
              <Link
                key={index}
                href={`/search?query=${item.param}`}
                className="text-slate-300 hover:text-white block mt-1"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
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