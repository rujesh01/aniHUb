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
    const response = await res.json();
    return response.data.data;
  } catch (error) {
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
