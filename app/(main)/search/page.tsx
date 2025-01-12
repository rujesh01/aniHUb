'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { getSearchResult } from "@/actions/GetFromApi"; 

const SearchPage = () => {
  const router = useRouter();
  const { keyword } = router.query; 
  const [searchResults, setSearchResults] = useState<any[]>([]);;
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
        setSearchResults(response.data.animes);
      } catch (err) {
        setError("Failed to fetch search results.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [keyword]); // Run this effect when the keyword changes

  return (
    <div className="search-results-page">
      <h1>Search Results for: {keyword}</h1>
      
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {searchResults && (
        <div className="results">
          {searchResults.map((item:any, index:number) => (
            <div key={index} className="result-item">
              <h2>{item.name}</h2>
              <p>{item.description}</p> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
