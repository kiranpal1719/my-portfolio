import React from 'react';
import profile from "../assets/my image.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Home.css';





const Home = () => {
useGSAP(() => {
    const tl = gsap.timeline();


    tl.from(".profile-name", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })


    .from(".web-text", {
      x: -100,      
      opacity: 0,   
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")


    .from(".ampersand", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6") 
    

    .from(".ui-ux-text, .ui-ux-animated", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")


    .from(".resume-btn", {
      y: 50,        
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)" 
    }, "-=0.2");

  });

  
  return (
    <div className="home-wrapper">
      <div className="home-content">

        <div className="profile-container">
    <div className="profile-image">
      <img src={profile} alt="profile" />
    </div>
    <h2 className="profile-name">Hi, I am Kiran</h2>
  </div>


        <h1 className="hero-title">
          <span className="web-text">WEB <span className="dev-text">DEVELOPER</span>
          </span>
          <span className="ampersand">&</span>
          <span className="ui-ux-text">UI/UX <span className="ui-ux-animated">DESIGNER</span>
          </span>
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