import React from 'react';
import "../../styles/index.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact me on social media</p>
      <div class="footer-container">
            <a href="https://twitter.com" class="social-icon" target="_blank">
                <img src="/img/images.jpg" alt="twitter" /> 
            </a>
            <a href="https://facebook.com" class="social-icon" target="_blank">
            <img src="/img/face.jpg" alt="facebook" /> 
            </a>
            <a href="https://instagram.com" class="social-icon" target="_blank">
            <img src="/img/15707869.jpg" alt="instagram" /> 
            </a>
        </div>
    </footer>
  );
};

export default Footer;