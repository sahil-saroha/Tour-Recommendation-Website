
import { useNavigate } from 'react-router-dom'; 
import '../tours.css';
import Footer from './Footer';

const toursData = [
  { id: 1, name: 'Shimla', image: '/images/shimla.jpg' },
  { id: 2, name: 'Manali', image: '/images/manali.jpg' },
  { id: 3, name: 'Goa', image: '/images/goa.jpg' },
  { id: 4, name: 'Jaipur', image: '/images/jaipur.jpg' },
  { id: 5, name: 'Mussoorie', image: '/images/beach.jpg' },
  { id: 6, name: 'Alibaug', image: '/images/manali.jpg' },
  { id: 7, name: 'Rishikesh', image: '/images/shimla.jpg' },
  { id: 8, name: 'Udaipur', image: '/images/shimla.jpg' },
  { id: 9, name: 'Darjeeling', image: '/images/jaipur.jpg' },
  { id: 10, name: 'Auli', image: '/images/goa.jpg' },
];

const Tours = () => {
  const navigate = useNavigate();

  const handleExplore = (cityName) => {
    navigate(`/${cityName}`); 
  };

  return (
    <>
      <div className="tours-container">
        <h2 className="tours-heading">Tours Recommend</h2>
        <div className="tours-grid">
          {toursData.map((tour) => (
            <div className="tour-card" key={tour.id}>
              <img src={tour.image} alt={tour.name} className="tour-image" />
              <h3 className="tour-name">{tour.name}</h3>
              <button onClick={() => handleExplore(tour.name)} className="explore-btn">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tours;
