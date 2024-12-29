"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-hls-quality-selector";

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

  useEffect(() => {
    if (playerRef.current || !videoRef.current) return;

    const player = videojs(videoRef.current, {
      controls: true,
      muted: false,
      preload: "auto",
      loop: false,
      poster: "",
      responsive: true,
      fluid: true,
      plugins: {
        hlsQualitySelector: {},
      },
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
          capLevelToPlayerSize: true,
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
        qualitySelector: true,
        pictureInPictureToggle: true,
      },
      hlsQualitySelector: {},
      onReady: function () {
        console.log("Player is ready!");
      },
      onPlay: function () {
        console.log("Video is playing");
      },
      onPause: function () {
        console.log("Video is paused");
      },
      errorDisplay: {
        message: "There was an error playing the video.",
        showError: true,
      },
      customClassNames: {
        "vjs-big-play-button": "custom-big-play-button",
        "vjs-control-bar": "custom-control-bar",
      },
      ads: {
        debug: true,
        skipButton: {
          enabled: true,
          skipTime: 5,
        },
      },
      accessibility: {
        captions: true,
      },
      videoJsCustomPlugin: {},
    });

    player.src(
      videoData.sources.map((source) => ({
        src: source.url,
        type: "application/x-mpegURL",
      }))
    );

    videoData.tracks
      .filter((track) => track.kind !== "thumbnails")
      .forEach((track) => {
        player.addRemoteTextTrack({
          kind: track.kind,
          src: track.file,
          label: track.label,
          default: track.default || false,
        });
      });

    player.ready(() => {
      console.log("Player is ready!");
    });

    playerRef.current = player;

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

