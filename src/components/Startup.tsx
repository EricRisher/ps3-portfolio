import React, { useEffect, useRef } from "react";
import { useStartup } from "../context/StartupContext";

function Startup() {
  const { phase } = useStartup();
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play audio once on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        // Optionally, handle autoplay block here (e.g., show a "click to start" button)
        // console.log("Audio autoplay was blocked:", e);
        console.log("Audio autoplay was blocked:", e);
        
      });
    }
  }, []);

  // Overlay is visible during fadeIn and fadeOutOverlay
  const showOverlay = phase === "fadeIn" || phase === "fadeOutOverlay";

  // Overlay opacity logic
  let overlayOpacity = "opacity-100";
  if (phase === "fadeOutOverlay") {
    overlayOpacity = "opacity-0";
  }
  if (phase === "showH1" || phase === "hideH1" || phase === "showUI") {
    overlayOpacity = "opacity-0";
  }

  // h1 opacity logic
  let h1Opacity = "opacity-0";
  let h1Transition = "duration-300"; // quick fade in
  if (phase === "showH1") h1Opacity = "opacity-100";
  if (phase === "hideH1") {
    h1Opacity = "opacity-0";
    h1Transition = "duration-700"; // slower fade out
  }

  return (
    <>
      {/* Overlay */}
      <audio ref={audioRef} src="/sounds/startup.mp3" preload="auto" />
      <div
        className={`fixed inset-0 z-[200] bg-black transition-opacity duration-700 pointer-events-none ${
          showOverlay ? overlayOpacity : "opacity-0"
        }`}
        style={{ transition: "opacity 1.2s" }}
      />
      <div className="fixed inset-0 z-[201] flex items-end justify-center flex-col pointer-events-none">
        <h1
          className={`text-4xl mr-30 transition-opacity ${h1Transition} ${h1Opacity}`}
        >
          Eric&apos;s Computer Entertainment
        </h1>
      </div>

    </>
  );
}

export default Startup;
