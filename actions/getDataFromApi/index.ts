"use server";

const url = process.env.BASE_URL;


const GetAnime = async () => {
  try {
    const res = await fetch(
      `${url}/api/v2/hianime/episode/sources?animeEpisodeId=blue-lock-17889&ep=94538&server=hd-1&category=sub`
    );

    if (!res.ok) {
      console.error(`Error fetching data: ${res.status} ${res.statusText}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default GetAnime;
