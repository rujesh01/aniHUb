import Navbar from "@/components/LandingPage/Navbar";
import Header from "@/components/LandingPage/SearchAnime";
import AnimeDescription from "@/components/LandingPage/Description";

export default async function Home() {
  return (
    <div>
      <section>
<<<<<<< HEAD
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
=======
        <Navbar />
        <Header />
        <AnimeDescription />
>>>>>>> arjun
      </section>
    </div>
  );
}
