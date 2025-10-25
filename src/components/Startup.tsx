import React, { useEffect } from "react";
import { useStartup } from "../context/StartupContext";

function Startup({ onEnd }: { onEnd?: () => void }) {
  const { phase } = useStartup();

  useEffect(() => {
    // Play audio on mount
    const audio = new Audio("/sounds/startup.mp3");
    audio.play().catch(() => {});
    console.log("Audio started");
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (phase === "showUI" && onEnd) {
      onEnd();
    }
  }, [phase, onEnd]);

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
