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
  intro: { start: number; end: number };
  outro: { start: number; end: number };
  sources: { url: string; type: string }[];
  anilistID: number;
  malID: number;
}

// Sample video data
const videoData: VideoData = {
  tracks: [
    {
      file: "https://s.megastatics.com/subtitle/9b05cc08756a3ddc698aeee5e2721d45/9b05cc08756a3ddc698aeee5e2721d45.vtt",
      label: "English",
      kind: "captions",
      default: true,
    },
    {
      file: "https://s.megastatics.com/thumbnails/550eec0da792b6ae20b3b906b9376602/thumbnails.vtt",
      label: "Thumbnails",
      kind: "thumbnails",
    },
  ],
  intro: { start: 0, end: 102 },
  outro: { start: 1321, end: 1410 },
  sources: [
    {
      url: "https://mmd.biananset.net/_v7/8fff1b4d38fbbd548c62f805027277d5e22c8ff713adc8f664f68fef8ac13bc3190b864b099c812066149256f438a546b56332b82c6596453f3942fe90b0968542ddbd0f8cd9bdfaceeaad9b4100b6f49ea1c2cf47d336f88fd9f7ad1120774aa0e0e1117932e53ea8a87dbc6c79e255d103efcb6e9a4215b131f65a7ef92f05/master.m3u8",
      type: "application/x-mpegURL",
    },
  ],
  anilistID: 21,
  malID: 21,
};

const VideoPage: React.FC = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.className = "video-js vjs-default-skin vjs-big-play-centered";
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, {
        controls: true,
        responsive: true,
        fluid: true,
        controlBar: {
          playToggle: true, 
          muteToggle: true, 
          volumeControl: true, 
          fullscreenToggle: true, 
          captionsButton: true,
          progressControl: true, 
          hlsQualitySelector: true, 
        },
        plugins: {
          hlsQualitySelector: {}, 
        },
        html5: {
          hls: {
            overrideNative: true,
          },
        },
        sources: videoData.sources.map((source) => ({
          src: source.url,
          type: source.type,
        })),
      }));

      // Add subtitle tracks
      videoData.tracks.forEach((track) => {
        player.addRemoteTextTrack(
          {
            kind: track.kind,
            src: track.file,
            label: track.label,
            default: track.default || false,
          },
          false
        );
      });

      player.ready(() => {
        console.log("Player is ready with subtitles and quality control.");
      });
    }

    // Cleanup player on unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return <div ref={videoRef} data-vjs-player style={{ width: "100%", height: "100%" }} />;
};

export default VideoPage;
