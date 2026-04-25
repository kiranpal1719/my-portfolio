import React from 'react';
import './Skills.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {
  const skills = [
    { name: 'Java Script', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ];

useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".header-text", {
    y: -80,
    opacity: 0,
    duration: 1.8
  })
  .from(".frontend-text", {
    y: -50,
    opacity: 0,
    duration: 1.6
  })
  .from(".skill-item", {
    y: 120,
    opacity: 0,
    duration: 1.5,
    stagger: 0.6
  });
}, []);

  return (
    <div className="stack-page">
      <div className="container">
        <h1 className="header-text">Tech STACK</h1>
        <h2 className="frontend-text">FRONTEND</h2>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.img} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;