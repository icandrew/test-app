import { useRef, useEffect } from "react";

interface VideoPlayerProps {
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(err => {
        console.log('Video playback failed:', err);
      });

      return () => {
        videoElement.pause();
        videoElement.currentTime = 0;
      };
    }
  }, []);

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover rounded-md"
      >
        <source 
          src="https://www.shutterstock.com/shutterstock/videos/1111283251/preview/stock-footage-almaty-kazakhstan-october-professional-workers-stand-on-freight-elevator-ground-in.webm" 
          type="video/webm" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer; 