"use client";
import { useStartup } from "../context/StartupContext";

export default function VideoBackground() {
  const { phase } = useStartup();

  // Show video as soon as overlay starts fading out
  const showVideo =
    phase === "fadeOutOverlay" ||
    phase === "showH1" ||
    phase === "hideH1" ||
    phase === "showUI";

  return showVideo ? (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/ps3-ribbon.mp4" type="video/mp4" />
    </video>
  ) : null;
}
