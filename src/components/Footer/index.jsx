import React from 'react';
import "../../styles/index.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact me on social media</p>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;