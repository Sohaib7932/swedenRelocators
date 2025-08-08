import React, { useState, useRef } from "react";
import { FaPlay, FaExpand } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
        overflow: "hidden",
      }}
    >
      <video
        controls
        ref={videoRef}
        src={src}
        style={{
          width: "100%",
          maxWidth: "1200px", // Optional: Set a maximum width for the video
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
  
};

export default VideoPlayer;
