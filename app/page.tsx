import Navbar from "@/components/LandingPage/Navbar";
import Header from "@/components/LandingPage/SearchAnime";
import AnimeDescription from "@/components/LandingPage/Description";
import AniHubLogo from "@/components/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div>
      <section>
        <Navbar />
        <Header />
        <AnimeDescription />
      </section>
    </div>
  );
}
