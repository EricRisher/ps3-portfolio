"use client";
import dynamic from "next/dynamic";
import XMBMenu from "@/components/XMBMenu";
import Startup from "@/components/Startup";
import { StartupProvider } from "@/context/StartupContext";

const VideoBackground = dynamic(() => import("../components/VideoBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <StartupProvider>
      <main className="relative w-full h-screen overflow-hidden">
        <Startup />
        <VideoBackground />

        <div className="relative z-10 flex items-center justify-center h-full">
          <XMBMenu />
        </div>
      </main>
    </StartupProvider>
  );
}
