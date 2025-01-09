"use client";

import { getStreamLink } from "@/actions/GetFromApi";
import { useQuery } from "@tanstack/react-query";
import VideoPlayer from "./costume/VideoPlayer";

const VideoWrapper = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["StreamingLink"],
    queryFn: () => getStreamLink(),
  });

  if (isLoading) {
    return <h1>Loading ...........</h1>;
  }

  return (
    <div>
      <VideoPlayer videoData={data.data} />
    </div>
  );
};

export default VideoWrapper;
