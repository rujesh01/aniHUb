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
      file: "https://s.megastatics.com/subtitle/014eb8057bd37251c03cbdea00785760/014eb8057bd37251c03cbdea00785760.vtt",
      label: "English",
      kind: "captions",
      default: true,
    },
    {
      file: "https://s.megastatics.com/thumbnails/e15a44cf4459ba42f816762db281b3df/thumbnails.vtt",
      label: "Thumbnails",
      kind: "metadata",
    },
  ],
  intro: { start: 0, end: 0 },
  outro: { start: 1312, end: 1413 },
  sources: [
    {
      url: "https://vd2.biananset.net/_v7/6cf11084b41635f2ecc05709a2cc86b3069ced36b809e2e52fa32bd45af6791558306ad9ffca301af6a0a1f05a4b93a151917d106a7703a6291310283cb80c176c090d181fd0784c9e6aff3e35681a85727dd50da77a7d8ae703b0004385c6af7f4cf0c9808a799d8ccdf7e9bd95addc440e4a3e296fd4b7e5256230a0cdcfd3/master.m3u8",
      type: "application/x-mpegURL",
    },
  ],
  anilistID: 137822,
  malID: 49596,
};

const VideoPage: React.FC = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.className =
        "video-js vjs-default-skin vjs-big-play-centered";
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
            src: track.file,
            kind: track.kind,
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

  return (
    <div
      ref={videoRef}
      data-vjs-player
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default VideoPage;
