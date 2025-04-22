import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../topdestination.css';
import { useNavigate } from 'react-router-dom';

const destinations = [
  { name: 'Goa', image: '/images/goa.jpg' },
  { name: 'Udaipur', image: '/images/jaipur.jpg' },
  { name: 'Manali', image: '/images/manali.jpg' },
  { name: 'Shimla', image: '/images/shimla.jpg' },
];

const TopDestination = () => {
  const navigate = useNavigate();

  const handleExplore = (cityName) => {
    navigate(`/${cityName.toLowerCase()}`);
  };

  return (
    <div className="top-destination-container">
      <h2 className="top-destination-heading">Top Destinations</h2>
      <Swiper
        modules={[Autoplay]}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="swiper-container"
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card">
              <img src={dest.image} alt={dest.name} className="slide-card-image" />
              <div className="slide-card-content">
                <h3 className="slide-card-title">{dest.name}</h3>
                <button
                  className="slide-card-button"
                  onClick={() => handleExplore(dest.name)}
                >
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopDestination;
