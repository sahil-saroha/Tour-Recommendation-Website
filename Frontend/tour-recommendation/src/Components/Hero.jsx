import React, { useEffect, useRef, useState } from 'react';
import '../index.css';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';

const videoList = [video1, video2, video3];

const Hero = () => {
  const videoRefs = [useRef(null), useRef(null)];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0); // 0 or 1 (for double buffering)

  useEffect(() => {
    const video = videoRefs[activeVideo].current;

    const handleEnded = () => {
      const nextIndex = (currentVideoIndex + 1) % videoList.length;
      const nextActive = (activeVideo + 1) % 2;
      const nextVideo = videoRefs[nextActive].current;

      nextVideo.src = videoList[nextIndex];
      nextVideo.load();

      nextVideo.classList.add('fade-in');
      video.classList.remove('fade-in');

      setTimeout(() => {
        nextVideo.play();
        setCurrentVideoIndex(nextIndex);
        setActiveVideo(nextActive);
      }, 300);
    };

    video.addEventListener('ended', handleEnded);
    video.play();

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex, activeVideo]);

  return (
    <div className="section-container">
      <div className="hero-container">
        {videoRefs.map((ref, i) => (
          <video
            key={i}
            ref={ref}
            className={`bg-video ${i === activeVideo ? 'fade-in' : ''}`}
            autoPlay
            muted
            playsInline
          >
            <source
              src={
                videoList[
                  i === activeVideo
                    ? currentVideoIndex
                    : (currentVideoIndex + 1) % videoList.length
                ]
              }
              type="video/mp4"
            />
          </video>
        ))}
        <div className="hero-overlay">
          <h1>Search your destination</h1>
          <input
            type="text"
            className="hero-search"
            placeholder="e.g. Manali, Goa, Jaipur..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
