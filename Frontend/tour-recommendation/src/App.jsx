import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import PopularDestinations from './Components/PopularDestinations';
import TopDestination from './Components/TopDestination';
import InstagramFeed from './Components/InstagramFeed';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Tours from './Components/Tours';
import Sample from './Components/Sample';
import City from './Components/City';
import Category from './Components/Category';

function App() {
  
  return (

    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PopularDestinations />
              <TopDestination />
              <InstagramFeed />
              <Footer />
               {/* <Tours/> */}
              
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/:cityName" element={<City />} />
        <Route path="/category/:categoryName" element={<Category />} />


      </Routes>
    </>
  );
}

export default App;
