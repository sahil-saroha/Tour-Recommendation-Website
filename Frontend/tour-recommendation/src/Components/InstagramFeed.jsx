
import '../index.css';
import { Heart, MessageCircle, Send } from 'lucide-react';

const posts = [
  { id: 1, image: '/images/insta1.jpg' },
  { id: 2, image: '/images/insta2.jpg' },
  { id: 3, image: '/images/insta3.jpg' },
  { id: 4, image: '/images/insta4.jpg' },
  { id: 5, image: '/images/insta5.jpg' },
  { id: 6, image: '/images/insta6.jpg' },
  { id: 7, image: '/images/insta7.jpg' },
  { id: 8, image: '/images/insta8.jpg' },
];


const duplicatedPosts = [...posts, ...posts];

const InstagramFeed = () => {
  return (
    <div className="section-container">
      <h2 className="insta-heading">📸 Tag us on Instagram and get featured here</h2>
      <div className="insta-marquee">
        <div className="insta-track">
          {duplicatedPosts.map((post, index) => (
            <div className="insta-card" key={index}>
              <img src={post.image} alt={`Insta Post ${index}`} className="insta-img" />
              <div className="insta-overlay">
                <Heart className="insta-icon" />
                <MessageCircle className="insta-icon" />
                <Send className="insta-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
