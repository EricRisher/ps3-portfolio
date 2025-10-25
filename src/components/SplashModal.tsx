import { useStartup } from "@/context/StartupContext";
import { useRef, useState } from "react";

export default function SplashModal() {
    const { startSequence } = useStartup();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [visible, setVisible] = useState(true);

    const handleStart = () => {
        audioRef.current?.play();
        startSequence();
        setVisible(false);
    };

    if (!visible) return (
        <div className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center">
            <div className="text-center p-8 max-w-2xl">
                <h2 className="text-4xl mb-6 text-white">
                    Welcome to Eric&#39;s PS3 Experience
                </h2>
            </div>
        </div>
    )

    return (
        <div className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center">
            <div className="text-center p-8 max-w-2xl">
                <h2 className="text-4xl mb-6 text-white">
                    Welcome to Eric&#39;s PS3 Experience
                </h2>
                <button
                    onClick={handleStart}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg
                                         transition-all duration-300 transform hover:scale-105"
                >
                    START
                </button>
            </div>
        </div>
    );
}
