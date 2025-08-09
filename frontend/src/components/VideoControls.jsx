import { useState } from "react";

export default function VideoControls({ videoRef }) {
    const [paused, setPaused] = useState(false);

    const togglePlayback = () => {
        if (videoRef.current) {
        paused ? videoRef.current.play() : videoRef.current.pause();
        setPaused(!paused);
        }
    };

    return (
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 outline-none focus:outline-none">
            <button className="h-1 w-16 bg-white" />
            <button className="h-1 w-16 bg-white" />
            <button
                onClick={togglePlayback}
                className="px-3 py-1 bg-white text-black rounded-full text-sm outline-none focus:outline-none"
            >
                {paused ? "▶️" : "⏸️"}
            </button>
        </div>
    );
}