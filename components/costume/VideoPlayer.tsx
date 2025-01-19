"use client";

import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import the default video.js styles
import "videojs-hls-quality-selector"; // Ensure the HLS quality selector plugin is imported

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

const VideoPlayer = ({ videoData }: VideoPageProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<typeof videojs.players | null>(null);
  const [playerReady, setPlayerReady] = useState<boolean>(false);

  const initializePlayer = () => {
    if (playerRef.current || !videoRef.current) return; // Check if player is already initialized

    const player = videojs(videoRef.current, {
      controls: true,
      muted: false,
      preload: "auto",
      loop: false,
      poster: "",
      responsive: true,
      fluid: true,
      playbackRates: [0.5, 1, 1.5, 2],
      techOrder: ["html5"],
      html5: {
        nativeAudioTracks: true,
        nativeVideoTracks: true,
        vhs: {
          useCueTags: true,
          withCredentials: false,
        },
        hls: {
          capLevelToPlayerSize: true, // Enable this for better HLS performance
        },
      },
      controlBar: {
        playToggle: true,
        volumePanel: { inline: false },
        currentTimeDisplay: true,
        timeDivider: true,
        durationDisplay: true,
        progressControl: true,
        fullscreenToggle: true,
        playbackRateMenuButton: true,
        subtitlesButton: true,
        qualitySelector: true, // Ensures the quality selector is available
        pictureInPictureToggle: true,
      },
      plugins: {
        hlsQualitySelector: {}, // Add the plugin here
      },
      onReady: () => {
        console.log("Player is ready!");
        setPlayerReady(true);
      },
      onPlay: () => {
        console.log("Video is playing");
      },
      onPause: () => {
        console.log("Video is paused");
      },
      errorDisplay: {
        message: "There was an error playing the video.",
        showError: true,
      },
      accessibility: {
        captions: true,
      },
      keyboard: true, // Enables keyboard shortcuts for controlling the video
    });

    // Ensure that you specify the correct MIME type for HLS
    player.src(
      videoData.sources.map((source) => ({
        src: source.url,
        type: "application/x-mpegURL", // HLS MIME type
      }))
    );

    // Add subtitle tracks from the API response
    videoData.tracks
      .filter((track) => track.kind !== "thumbnails") // Exclude thumbnail tracks
      .forEach((track) => {
        player.addRemoteTextTrack({
          kind: track.kind,
          src: track.file,
          label: track.label,
          default: track.default || false,
        });
      });

    playerRef.current = player;
  };

  useEffect(() => {
    if (!playerReady) {
      initializePlayer();
    }
  }, [videoData, playerReady]);

  return (
      <div className="video-container">
        <video ref={videoRef} className="video-js " />
    </div>
  );
};

export default VideoPlayer;


