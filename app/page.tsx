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
        <h1>This is root page</h1>
        <section>
          <AniHubLogo />
        </section>
        <Link href={"/home"}>
          <Button className="flex">Go to home</Button>
        </Link>
        <Link href={"/watch"}>
          <Button className="flex">Go to watch</Button>
        </Link>
        <Navbar />
        <Header />
        <AnimeDescription />
      </section>
    </div>
  );
}
