"use client";
import dynamic from "next/dynamic";
import XMBMenu from "@/components/XMBMenu";
import MediaPlayer from "@/components/MediaPlayer";

const VideoBackground = dynamic(() => import("../components/VideoBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 flex items-center justify-center h-full">
        <MediaPlayer />

        <XMBMenu />
      </div>
    </main>
  );
}
