"use server";

const url = process.env.BASE_URL;
//   "https://animev2-oslx.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=steinsgate-3?ep=230&server=hd-1&category=sub"

export const getStreamLink = async () => {
  try {
    const res = await fetch(
      `${url}/api/v2/hianime/episode/sources?animeEpisodeId=steinsgate-3?ep=230&server=hd-1&category=sub`
    );

    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    throw error;
  }
};
