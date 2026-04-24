import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* FontAwesome aur Google Fonts ki CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Inter:wght@400;700&display=swap" rel="stylesheet" />

      <div className="footer-container">
        
        {/* Left Side */}
        <div className="footer-left">
          <h1 className="footer-main-title">
            Want to start <br /> 
            <span className="italic-serif">a new project?</span>
          </h1>
          <p className="footer-sub-title">Or just say hello.</p>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="footer-email">
            <a href="#">kiranpal1719@gmail.com</a>
          </div>

          <div className="footer-social-grid">
            <a href="https://www.linkedin.com/in/ms-kiran-622538341

" className="social-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://github.com/kiranpal1719" className="social-link"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="https://leetcode.com/u/kiranpal_19/" className="social-link"><i className="fas fa-code"></i> LeetCode</a>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <input type="email" placeholder="Email Address" className="footer-input" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;