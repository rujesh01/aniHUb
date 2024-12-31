import AniHubLogo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Root from "@/components/home";

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
        <Root />
      </section>
    </div>
  );
}
