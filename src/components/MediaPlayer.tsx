import React, { useRef } from "react";
import "./MediaPlayer.css";

const MediaPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element

  // Toggle play/pause
  const handleTogglePlayPause = () => {
    if (videoRef.current) {
      console.log("Video element:", videoRef.current); // Debugging
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } else {
      console.log("Video reference is null");
    }
  };

  return (
    <div className="media-container">
      <div className="media-player">
        {/* Overlay with buttons */}
        <div className="media-overlay">
          <button
            className="media-button toggle-button main-media-btn"
            onClick={() => {
              console.log("Button clicked"); // Debugging
              handleTogglePlayPause();
            }}
          >
          </button>
        </div>

        {/* Video content */}
        <div className="media-content">
          <video
            ref={(ref) => {
              console.log("Video ref:", ref); // Debugging
              videoRef.current = ref;
            }}
            src="./4runner.mov"
            className="media-element"
            
            disablePictureInPicture
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
