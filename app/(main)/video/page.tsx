import { GetAnimeStreamingLinks } from "@/actions/getDataFromApi";
import VideoPlayer from "@/components/costums/VideoPlayer";
import React, { useTransition } from "react";

const VideoPage = async () => {
  const StreamingLinkData = await GetAnimeStreamingLinks();

  return (
    <div className="homepage">
      <h1>Video Player</h1>
      <div className="w-[500px] h-[400px]">
        <VideoPlayer videoData={StreamingLinkData?.data} />
      </div>
    </div>
  );
};

export default VideoPage;
