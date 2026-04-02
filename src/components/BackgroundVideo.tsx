import { useState } from 'react';

export default function BackgroundVideo() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />

      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/5_min_Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/dark-tech/1920/1080?blur=10)' }}
        />
      )}
    </div>
  );
}
