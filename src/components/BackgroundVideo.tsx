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
          {/* Placeholder video URL - in real project user should put their own file in public/assets/video/ */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-dark-blue-background-4464-large.mp4" type="video/mp4" />
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
