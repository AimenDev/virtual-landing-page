import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Play, Pause } from 'lucide-react';

function Video({ src, alt }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
      video.addEventListener('error', (e) => setError(`Error: ${e.target.error.message}`));
    }
    return () => {
      if (video) {
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
        video.removeEventListener('error', (e) => setError(`Error: ${e.target.error.message}`));
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(e => setError(`Error playing video: ${e.message}`));
      } else {
        videoRef.current.pause();
      }
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="relative group" id='video'>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="rounded-lg w-full border border-orange-700 shadow-md shadow-orange-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500"
        
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img  alt={alt} className="rounded-lg w-full hidden" />
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        ) : (
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    </div>
  );
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  
  alt: PropTypes.string.isRequired,
};

function VideoGallery({ video1, video2 }) {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Video src={video1} alt="Video 1 description" />
        <Video src={video2} alt="Video 2 description" />
      </div>
    </div>
  );
}

VideoGallery.propTypes = {
  video1: PropTypes.string.isRequired,
  video2: PropTypes.string.isRequired,
};

export default VideoGallery;