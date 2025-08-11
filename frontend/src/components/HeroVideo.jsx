import React, { useState, forwardRef } from "react";

const HeroVideo = forwardRef((props, ref) => {
    const [videoError, setVideoError] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full h-screen z-10 overflow-hidden outline-none focus:outline-none">
        {!videoError ? (
            <video
                ref={ref}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover outline-none focus:outline-none"
            >
            <source src="/video/" type="video/Lamborghini Aventador.mp4"/>
                Tu navegador no soporta el video.
                </video>
        ) : (
            <img
                src="/images/wallpaper2.jpg"
                alt="Lamborghini fondo"
                className="w-full h-full object-cover"
            />
        )}
        </div>
    );
});

export default HeroVideo;




