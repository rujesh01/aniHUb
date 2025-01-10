<<<<<<< HEAD
"use client";
=======
'use client';
>>>>>>> carausel

import { useEffect, useState } from "react";
import { getAnimeHomePage } from "@/actions/GetFromApi";
import { Button } from "@/components/ui/button";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeCarouselLoading = () => (
  <div className="w-full h-[400px] flex items-center justify-center text-white">
    Loading...
  </div>
);

const HomeCarousel = () => {
  const [animeData, setAnimeData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await getAnimeHomePage();
        if (response.success) {
          setAnimeData(response.data.spotlightAnimes);
        } else {
          throw new Error("Failed to load spotlight animes.");
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
    return <HomeCarouselLoading />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <Carousel>
      <CarouselContent>
        {animeData.map((anime, index) => (
          <CarouselItem key={anime.id || index}>
            <div className="relative flex gap-4 justify-between w-full min-h-[250px] xs:max-h-[500px] lg:max-h-[500px] bg-gray-900">
              <div className="absolute w-full h-full z-10 hidden lg:block bg-gradient-to-r from-gray-900 to-transparent"></div>

              <div className="hidden lg:block my-auto max-w-[40%] pl-4 z-20">
                <p
                  className={`text-md font-medium mb-2 text-white ${
<<<<<<< HEAD
                    anime.rank === 1
                      ? "text-yellow-400"
                      : anime.rank === 2
                      ? "text-gray-300"
                      : "text-white"
=======
                    anime.rank === 1 ? 'text-yellow-400' : anime.rank === 2 ? 'text-gray-300' : 'text-white'
>>>>>>> carausel
                  }`}
                >
                  #{anime.rank} Spotlight
                </p>

                <p className="font-bold mb-2 lg:text-4xl line-clamp-3 text-white">
                  {anime.name}
                </p>

                <div className="gap-2 flex items-center mb-2">
                  {anime.otherInfo.map((info: string, index: number) => (
                    <Chip
                      key={index}
                      size="sm"
<<<<<<< HEAD
                      className="text-white  rounded-md p-0"
=======
                      className="text-white rounded-md p-0"
>>>>>>> carausel
                    >
                      {info}
                    </Chip>
                  ))}
                </div>

                <p className="mb-4 text-white line-clamp-3">
                  {anime.description || "No description available."}
                </p>

                <div className="flex gap-4">
                  <Link href={`/watch/${anime.id}`} className="block">
                    <Button
                      variant="default"
                      className="bg-[#FFBADE] text-gray-800 p-5  text-md rounded-full flex items-center gap-2"
                    >
                      <Play size={20} /> Watch Now
                    </Button>
                  </Link>

                  <Link href={`/more-info/${anime.id}`} className="block">
                    <Button
                      variant="outline"
                      className="font-semibold p-5  text-md rounded-full bg-gray-600 border-0 text-white flex items-center gap-2"
                    >
                      <ArrowRight size={20} /> Details
                    </Button>
                  </Link>
                </div>
              </div>

              <img
                src={anime.poster}
                alt={anime.name}
                className="object-cover flex-1 w-full h-[500px] lg:min-w-[60%] rounded-none lg:rounded-l-lg"
              />

              {/* Overlay for Small Screens */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent w-full h-full z-10 lg:hidden"></div>

              <div className="absolute left-2 xs:left-5 bottom-4 xs:bottom-[60px] w-1/2 z-10 lg:hidden">
                <p
                  className={`text-sm font-medium mb-2 text-white ${
<<<<<<< HEAD
                    anime.rank === 1
                      ? "text-yellow-400"
                      : anime.rank === 2
                      ? "text-gray-300"
                      : "text-white"
=======
                    anime.rank === 1 ? 'text-yellow-400' : anime.rank === 2 ? 'text-gray-300' : 'text-white'
>>>>>>> carausel
                  }`}
                >
                  #{anime.rank} Spotlight
                </p>

                <p className="text-2xl font-bold mb-1 md:text-3xl line-clamp-2 text-white">
                  {anime.name}
                </p>

                <div className="gap-2 hidden xs:flex items-center mb-2">
                  {anime.otherInfo.map((info: string, index: number) => (
                    <Chip
                      key={index}
                      size="sm"
                      className="text-white rounded-md p-0"
                    >
                      {info}
                    </Chip>
                  ))}
                </div>

                <p className="text-sm font-thin mb-4 xs:text-md xs:font-light text-white line-clamp-3">
                  {anime.description || "No description available."}
                </p>

                <div className="flex gap-2">
                  <Link href={`/watch/${anime.id}`} className="block">
                    <Button
                      variant="default"
                      className="hover:bg-primary/80 font-semibold xs:px-6 xs:text-lg flex items-center gap-2"
                    >
                      <Play size={20} /> Watch Now
                    </Button>
                  </Link>

                  <Link href={`/more-info/${anime.id}`} className="block">
                    <Button
                      variant="outline"
                      className="font-semibold rounded-lg xs:px-6 xs:text-lg flex items-center gap-2"
                    >
                      <ArrowRight size={20} /> Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-4 right-14 z-20 flex flex-col gap-2">
        <CarouselPrevious className="text-white bg-gray-500 border-0 p-2 rounded-full hover:bg-opacity-80" />
        <CarouselNext className="text-white bg-gray-500 border-0 p-2 rounded-full hover:bg-opacity-80" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
