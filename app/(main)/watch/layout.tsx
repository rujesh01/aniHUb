import VideoWrapper from "@/components/VideoWrapper";
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
      <VideoWrapper />
      <div>{children}</div>
    </>
  );
};

export default WatchPageLayout;
