"use server";

const url = process.env.BASE_URL;

export const GetAnime = async () => {
  try {
    const res = await fetch(`${url}/api/v2/hianime/home`);

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    return null;
  }
};

export const GetAnimeStreamingLinks = async () => {
  const animeEpisodeId = "pseudo-harem-19246";
  const server = "hd-1";
  const category = "sub";

  try {
    const res = await fetch(
      `${url}/api/v2/hianime/episode/sources?animeEpisodeId=${animeEpisodeId}&server=${server}&category=${category}`
    );

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    return null;
  }
};
