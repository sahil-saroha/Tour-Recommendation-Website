import '../AboutUs.css'
import VisionAndMission from './VisionAndMission';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer.jsx'
const AboutUs = () => {
  return (
    <>
    <div className="about-subcontainer">
      <h2 className="about-heading gh">Meet the Team</h2>
      <div className="team-cards">
        <div className="team-member">
          <img src="/images/person1.jpg" alt="Sahil Saroha" className="team-image" />
          <h3 className="team-name">Sahil Saroha</h3>
          <p >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eligendi repellendus similique quia quis, esse culpa sapiente 
          </p>
        </div>
        <div className="team-member">
          <img src="/images/person2.png" alt="Sangam Khushwa" className="team-image" />
          <h3 className="team-name">Sangam Khushwa</h3>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat! Voluptatem perspiciatis minus laudantium voluptatum.
          </p>
        </div>
      </div>
    </div>

     <VisionAndMission/>
     <WhyChooseUs/>
     <Footer/>
    </>
  );
};

export default AboutUs;
