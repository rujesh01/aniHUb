import GridCard from "@/components/home/GridCard";
import HomeCarousel from "@/components/home/HomeCarausel";

const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <HomeCarousel />
      <GridCard/>
    </div>
  );
};

export default HomePage;
