"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITrendingAnime } from "@/types";
import Image from "next/image";

interface TrendingAnimeCarouselProps {
  animeData: ITrendingAnime[];
}

export function TrendingAnimeCarousel({
  animeData,
}: TrendingAnimeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 6 >= animeData?.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animeData?.length - 6 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-7xl  mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-purple-400">Trending</h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          {animeData
            ?.slice(currentIndex, currentIndex + 6)
            .map((anime, index) => (
              <Card
                key={anime.id || index}
                className="flex-shrink-0 w-48 bg-gray-900 border-0 group cursor-pointer"
              >
                <CardContent className="p-0 relative overflow-hidden">
                  <Image
                    src={anime.poster}
                    alt={anime.name || "Anime"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-72 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400 font-bold">
                        {String(currentIndex + index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-white font-medium text-sm truncate">
                        {anime.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900/80 hover:bg-gray-900 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900/80 hover:bg-gray-900 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
