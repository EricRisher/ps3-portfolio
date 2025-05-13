import React, { useRef } from "react";
import "./MediaPlayer.css";

// MediaPlayer props
interface MediaPlayerProps {
  src: string; // Video source
  onClose: () => void; // Callback function to close the media player
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ src, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element

  // Toggle play/pause
  const handleTogglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } else {
      console.log("Video reference is null");
    }
  };

  // Handle menu button click
  const handleMenuButtonClick = () => {
    console.log("Menu button clicked");
  };

  // Handle close player click
  const handleCloseButtonClick = () => {
    if (videoRef.current) {
      // close the media player
      videoRef.current.style.display = "none"; // Hide the video element
      document.querySelector(".media-player")?.classList.add("hidden");

      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset the video to the beginning
    } else {
      console.log("Video reference is null");
    }
    console.log("Close button clicked");
  };

  // Handle minimize button click
  const handleMinimizeButtonClick = () => {
    console.log("Minimize button clicked");
  };

  // Handle reset track button click
  const handleToggleResetClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset the video to the beginning
      videoRef.current.pause(); // Pause the video
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
            className="media-button main-media-btn"
            onClick={() => {
              handleTogglePlayPause();
            }}
          ></button>
          <button
            className="media-button cir-media-btn menu-btn"
            onClick={() => {
              handleMenuButtonClick();
            }}
          />
          <button
            className="media-button cir-media-btn close-btn"
            onClick={() => {
              handleCloseButtonClick();
            }}
          ></button>
          <button
            className="media-button cir-media-btn minimize-btn"
            onClick={() => {
              handleMinimizeButtonClick();
            }}
          ></button>
          <button
            className="media-button reset-btn"
            onClick={() => {
              handleToggleResetClick();
            }}
          ></button>
        </div>

        {/* Video content */}
        <div className="media-content">
          <video
            ref={(ref) => {
              console.log("Video ref:", ref); // Debugging
              videoRef.current = ref;
            }}
            src="./videos/4runner.mov"
            className="media-element"
            disablePictureInPicture
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
