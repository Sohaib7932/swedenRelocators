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
    <div className=" tw-overflow-hidden">
      <video
      controls
        ref={videoRef}
        src={src}
        style={{ width: "100%", borderRadius: "12px" }}
      />
      {/* <div className="tw-bg-[rgb(0,0,0,0.1)] tw-rounded-xl tw-h-full tw-w-full tw-flex tw-justify-center tw-items-center tw-absolute tw-top-0">
        <button
          className="tw-flex tw-justify-center tw-items-center tw-w-20 tw-h-20 tw-border tw-rounded-full tw-border-white"
          onClick={togglePlay}
          style={{ fontSize: "24px" }}
        >
          {isPlaying ? (
            <IoMdPause size={35} className="tw-text-white" />
          ) : (
            <FaPlay size={30} className="tw-text-white" />
          )}
        </button>
        <button
          className="tw-ml-4 tw-flex  tw-absolute tw-right-0 tw-top-0 tw-justify-center tw-items-center tw-w-12 tw-h-12 tw-rounded-ful"
          onClick={toggleFullScreen}
          style={{ fontSize: "24px" }}
        >
          <FaExpand size={20} className="tw-text-white" />
        </button>
      </div> */}
    </div>
  );
};

export default VideoPlayer;
