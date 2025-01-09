import { getHomeDetails } from "@/actions/GetFromApi";
import { TrendingAnimeCarousel } from "@/components/TrendingAnimeCarousel";
import { IAnimeData } from "@/types";

const HomePage = async () => {
  const animeData: IAnimeData = await getHomeDetails();
  return (
    <div>
      <h1> home page</h1>
      <TrendingAnimeCarousel animeData={animeData.trendingAnimes} />
    </div>
  );
};

export default HomePage;
