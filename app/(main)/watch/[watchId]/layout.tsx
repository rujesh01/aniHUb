import VideoWrapper from "@/components/VideoWrapper";
import EpisodesTable from "@/components/watch/EpisodeRange";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Home",
};

const WatchPageLayout = ({ children }: Props) => {
  return (
    <>
      <h1>this is layout</h1>
      <div className="flex flex-col lg:flex-row mx-4">
        <div className="lg:w-1/4 w-full">
          <EpisodesTable />
        </div>
        <div className="lg:w-3/4 w-full">
          <VideoWrapper />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default WatchPageLayout;
