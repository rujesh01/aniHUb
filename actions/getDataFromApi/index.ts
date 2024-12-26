"use server";

const url = process.env.BASE_URL;


const GetAnime = async () => {
  try {
    const res = await fetch(`${url}//api/v2/hianime/home`);

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    return null;
  }
};

export default GetAnime;
