
import '../index.css';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">TourMate</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="#"><Facebook /></a>
          <a href="#"><Instagram /></a>
          <a href="#"><Twitter /></a>
          <a href="mailto:info@tourrec.com"><Mail /></a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} TourRec. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
