import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';

const videoList = [video1, video2, video3];

const Hero = () => {
  const videoRefs = [useRef(null), useRef(null)];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/cities')
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

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

  const handleSearch = () => {
    if (!searchTerm) return;

    const matched = cities.find(
      (city) => city.city.toLowerCase() === searchTerm.toLowerCase()
    );

    if (matched) {
      navigate(`/${matched.city}`);
    } else {
      navigate(`/${searchTerm}`);
    }
  };

  const handleSuggestionClick = (name) => {
    navigate(`/${name}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = cities.filter((city) =>
      city.city.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

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
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              className="hero-search"
              placeholder="e.g. Manali, Goa, Jaipur..."
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              style={{
                paddingRight: '35px',
              }}
            />
            <span
              onClick={handleSearch}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
            >
              🔍
            </span>
          </div>

          {suggestions.length > 0 && (
            <div style={{ marginTop: '10px', color: 'white' }}>
              {suggestions.map((sug, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(sug.city)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '5px 0',
                  }}
                >
                  <span>{sug.city}</span>
                  <span>🔍</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
