"use client";
import dynamic from "next/dynamic";
import XMBMenu from "@/components/XMBMenu";

const VideoBackground = dynamic(() => import("../components/VideoBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <XMBMenu />
      </div>
    </main>
  );
}
