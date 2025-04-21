
import { useParams, useNavigate } from 'react-router-dom';
import '../category.css';

const categoryData = {
  Beach: [
    { name: 'Goa', image: '/images/goa.jpg' },
    { name: 'Pondicherry', image: '/images/pondicherry.jpg' },
    { name: 'Alibaug', image: '/images/alibaug.jpg' },
    { name: 'Gokarna', image: '/images/gokarna.jpeg' },
    { name: 'Diu', image: '/images/diu.jpeg' },
  ],
  Historical: [
    { name: 'Jaipur', image: '/images/jaipur.jpg' },
    { name: 'Agra', image: '/images/agra.jpg' },
    { name: 'Hampi', image: '/images/hampi.jpg' },
    { name: 'Varanasi', image: '/images/varanasi.jpg' },
    { name: 'Khajuraho', image: '/images/khajuraho.jpg' },
  ],
  'Hill Station': [
    { name: 'Manali', image: '/images/manali.jpg' },
    { name: 'Shimla', image: '/images/shimla.jpg' },
    { name: 'Mussoorie', image: '/images/mussoorie.jpg' },
    { name: 'Ooty', image: '/images/ooty.jpg' },
    { name: 'Nainital', image: '/images/nainital.jpg' },
  ],
};

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const formattedCategoryName =
    categoryName
      .toLowerCase()
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const destinations = categoryData[formattedCategoryName] || [];

  const handleCardClick = (cityName) => {
    navigate(`/${cityName}`);
  };

  return (
    <div className="sectionC">
      <h2 className="category-headingC">{formattedCategoryName}</h2>
      <div className="cards-wrapperC">
        {destinations.map((place, index) => (
          <div
            className="destination-cardC"
            key={index}
            onClick={() => handleCardClick(place.name)}
          >
            <img
              src={place.image}
              alt={place.name}
              className="card-imageC"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/placeholder.jpg';
              }}
            />
            <div className="card-titleC">{place.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
