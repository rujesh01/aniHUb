"use server";

const url = process.env.BASE_URL;

export const getStreamLink = async () => {
  try {
    const res = await fetch(
      `${url}/api/v2/hianime/episode/sources?animeEpisodeId=steinsgate-3?ep=230&server=hd-1&category=sub`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch stream link");
    }
    return await res.json();
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