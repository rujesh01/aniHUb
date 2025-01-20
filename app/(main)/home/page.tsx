import GridCard from "@/components/home/GridCard";
import HomeCarousel from "@/components/home/HomeCarausel";
import { getHomeDetails } from "@/actions/GetFromApi";
import { TrendingAnimeCarousel } from "@/components/TrendingAnimeCarousel";
import { IAnimeData } from "@/types";

const HomePage = async () => {
  const animeData: IAnimeData = await getHomeDetails();
  return (
    <div className="bg-gray-900">
      <HomeCarousel />
      <TrendingAnimeCarousel animeData={animeData.trendingAnimes} />
      <GridCard/>
    </div>
  );
};

export default HomePage;
