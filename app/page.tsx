import GetAnime from "@/actions/getDataFromApi";
import Image from "next/image";

export default async function Home() {
  const data = await GetAnime();

  console.log(data);

  return <div>h1 thi is home</div>;
}
