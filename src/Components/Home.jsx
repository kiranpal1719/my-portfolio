import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 className="hero-title">
          <span className="web-text">WEB DEVELOPER</span>
          <span className="ampersand">&</span>
          <span className="ui-ux-animated">UI/UX DESIGNER</span>
        </h1>


        <div className='resume-container'>
          <a href=" Kiran resume.pdf"download className='resume-btn'>
            Download Resume
            </a>
        </div>

      


      </div>
    </div>
  );
};

export default Home;