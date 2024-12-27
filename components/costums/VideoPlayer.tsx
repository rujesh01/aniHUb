"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-hls-quality-selector";

// Define types for video data
interface Track {
  file: string;
  label: string;
  kind: string;
  default?: boolean;
}

interface VideoData {
  tracks: Track[];
  sources: { url: string; type: string }[];
}

interface VideoPageProps {
  videoData: VideoData;
}

const VideoPlayer: React.FC<VideoPageProps> = ({ videoData }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<typeof videojs.players | null>(null);

  const data = videoData.tracks.map((items) => {
    return items.label;
  });

  console.log(data);

  useEffect(() => {
    if (playerRef.current || !videoRef.current) return;

    // Initialize video.js player
    const player = videojs(videoRef.current, {
      controls: true,
      responsive: true,
      fluid: true,
      controlBar: {
        fullscreenToggle: true,
      },
      plugins: {
        hlsQualitySelector: {},
      },
      // tracks: videoData.tracks.map((track) => ({
      //   kind: track.kind,
      //   src: track.file,
      //   label: track.label,
      //   srcLang: "en",
      //   // default: track.default,
      // })),
    });

    // Add sources to player
    player.src(
      videoData.sources.map((source) => ({
        src: source.url,
        type: source.type,
      }))
    );

    // Add remote text tracks
    videoData.tracks.forEach((track) => {
      player.addRemoteTextTrack(
        {
          kind: track.kind,
          src: track.file,
          label: track.label,
          default: track.default || false,
        },
      );
    });

    player.ready(() => {
      console.log("Player is ready!");
    });

    playerRef.current = player;

    // Cleanup on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoData]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
      />
    </div>
  );
};

export default VideoPlayer;
