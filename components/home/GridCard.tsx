'use client';
import { getAnimeHomePage } from "@/actions/GetFromApi";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"; 
import { Captions, ChevronRight, Dot, Mic } from "lucide-react"; 
import Link from "next/link"; 

interface Anime {
  poster?: string;
  name: string;
  episodes: {
    sub?: string;
    dub?: string;
  };
  type?: string;
}

interface AnimeData {
  topAiring: Anime[];
  mostPopular: Anime[];
  mostFavourite: Anime[];
  latestCompleted: Anime[];
}

const GridCard: React.FC = () => {
  const [animeData, setAnimeData] = useState<AnimeData>({
    topAiring: [],
    mostPopular: [],
    mostFavourite: [],
    latestCompleted: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await getAnimeHomePage();
        if (response.success) {
          setAnimeData({
            topAiring: response.data.topAiringAnimes || [],
            mostPopular: response.data.mostPopularAnimes || [],
            mostFavourite: response.data.mostFavoriteAnimes || [],
            latestCompleted: response.data.latestCompletedAnimes || []
          });
        } else {
          throw new Error("Failed to load anime data.");
        }
      } catch (err) {
        setError("Failed to load anime data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const categories = [
    { title: "Top Airing", items: animeData.topAiring, link: "/top-airing" },
    { title: "Most Popular", items: animeData.mostPopular, link: "/most-popular" },
    { title: "Most Favourite", items: animeData.mostFavourite, link: "/most-favourite" },
    { title: "Latest Completed", items: animeData.latestCompleted, link: "/latest-completed" }
  ];

  return (
    <section className="m-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category, index) => (
        <div key={index}>
          <h2 className="text-[#FFBADE] text-lg font-semibold mb-4">{category.title}</h2>
          <ul className="space-y-1">
            {category.items.slice(0, 5).map((anime, idx) => (
              <React.Fragment key={idx}>
                <li className="bg-transparent p-2 text-white flex items-center space-x-4">
                  <img
                    src={anime.poster}
                    alt={anime.name}
                    className="w-16 h-20 bg-contain"
                  />
                  <div className="flex-1">
                    <h2 className="text-sm font-bold">{anime.name}</h2>
                    <div className="flex items-center gap-1 mt-1 rounded-lg">
                      <span className="bg-green-200 flex items-center gap-1 rounded-md text-black p-1 font-semibold text-xs">
                        <Captions className="h-4 w-4" />{anime.episodes.sub || "N/A"}
                      </span>
                      <span className="bg-blue-200 flex items-center gap-1 rounded-md text-black p-1 font-semibold text-xs">
                        <Mic className="h-4 w-4" />{anime.episodes.dub || "N/A"}
                      </span>
                      <span className="text-sm flex items-center text-gray-400">
                        <Dot className="text-gray-400" />{anime.type || "TV"}
                      </span>
                    </div>
                  </div>
                </li>
                {idx < Math.min(4, category.items.length - 1) && <Separator className="my-2 bg-gray-700" />}
              </React.Fragment>
            ))}
          </ul>
          <Separator className="my-2 bg-gray-700" />
          <Link
            href={category.link}
            className="my-2 ml-2 flex items-center justify-start text-white text-sm cursor-pointer hover:text-[#FFBADE]"
          >
            <span>View More</span>
            <ChevronRight className="ml-1 w-5" />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default GridCard;

