import XMBMenu from "@/components/XMBMenu";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/ps3-ribbon.mp4" type="video/mp4" />
      </video>
      {/* XMB Menu */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <XMBMenu />
      </div>
    </main>
  );
}
