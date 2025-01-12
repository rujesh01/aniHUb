import Navbar from "@/components/LandingPage/Navbar";
import Header from "@/components/LandingPage/SearchAnime";
import AnimeDescription from "@/components/LandingPage/Description";

export default async function Home() {
  return (
    <div className="h-screen bg-gray-900">
      <Navbar />
      <Header />
      <AnimeDescription />
    </div>
  );
}
