"use client";
import dynamic from "next/dynamic";
import XMBMenu from "@/components/XMBMenu";

const MediaPlayer = dynamic(() => import("@/components/MediaPlayer"), {
  ssr: false,
  loading: () => null, // or a spinner if you want
});

const VideoBackground = dynamic(() => import("../components/VideoBackground"), {
  ssr: false,
});

export default function Home() {

  const isVideoPlayerActive = false; // Replace with actual state logic
  const currentVideoSrc = ""; // Replace with actual video source

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground />

      {isVideoPlayerActive && (
        <MediaPlayer src={currentVideoSrc} onClose={() => {}} />
      )}

      <div className="relative z-10 flex items-center justify-center h-full">
        <XMBMenu />
      </div>
    </main>
  );
}
