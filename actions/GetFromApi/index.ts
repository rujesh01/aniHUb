"use server";

const url = process.env.BASE_URL;

export const getStreamLink = async () => {
  try {
    const res = await fetch(
      `${url}/api/v2/hianime/episode/sources?animeEpisodeId=steinsgate-3?ep=230&server=hd-1&category=sub`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch anime homepage data.");
    }

    // Parse and return the JSON data
    return await res.json();
  } catch (error) {
    console.error("Error fetching anime homepage:", error);
    throw error;
  }
};

export const getHomeDetails = async () => {
  try {
    const res = await fetch(`${url}/api/v2/hianime/home`);
    if (!res.ok) {
      throw new Error("Failed to fetch stream link");
    }
    const response = await res.json();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAnimeHomePage = async () => {
  try {
    const res = await fetch(`${url}/api/v2/hianime/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch anime homepage data.");
    }

    // Parse and return the JSON data
    return await res.json();
  } catch (error) {
    console.error("Error fetching anime homepage:", error);
    throw error;
  }
};

export const getSearchResult = async (query: string, page: number) => {
  try {
    const res = await fetch(
      `${url}/api/v2/hianime/search?q=${query}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch search anime data.");
    }

    return await res.json();
  } catch (error) {}
};
