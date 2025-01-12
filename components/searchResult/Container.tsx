'use client'

import React, { useEffect, useState } from "react";
import { getSearchResult } from "@/actions/GetFromApi"; 
import { useSearchParams } from "next/navigation";
import MostPopular from "./MostPopular";
import GroupCard from "./GroupCard";
import Genre from "./Genre";


const Container = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword'); 
  const [searchQuery, setSearchQuery] = useState<string | null>()
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [mostPopularAnimes, setMostPopularAnimes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const query = Array.isArray(keyword) ? keyword[0] : keyword;

  useEffect(() => {
    if (!query) return; // Don't fetch if there's no keyword

    const fetchData = async () => {
      setIsLoading(true);
      setError(null); 
      try {
        const response = await getSearchResult(query, 1);
        setSearchQuery(response.data.searchQuery);
        setSearchResults(response.data.animes);
        setMostPopularAnimes(response.data.mostPopularAnimes);
      } catch (err) {
        setError("Failed to fetch search results.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keyword]); // Run this effect when the keyword changes

  return (
    <div className="flex flex-col lg:flex-row">
    {/* GroupCard takes 3/4 of the screen width on large screens and full width on smaller screens */}
    <div className="lg:w-3/4 w-full">
      {isLoading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <GroupCard cards={searchResults} animeName={searchQuery} />
    </div>

    {/* MostPopular takes 1/4 of the screen width on large screens and full width on smaller screens */}
    <div className="lg:w-1/4 w-full mt-4 lg:mt-0">
      <MostPopular popularAnimes={mostPopularAnimes} />
      <Genre />
    </div>
  </div>
  );
}
 
export default Container;