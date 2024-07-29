import React from "react";
import "./About.css";
import optimizedImage from "./images/bgImage.jpg"; // Add your optimized image here

const About = () => {
  return (
    <section id="about" className="about-section">
      <img src={optimizedImage} alt="Background" className="background-image" />
      <div className="content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Shreyas Acharya, a front-end developer specializing in React.
          Proficient in JavaScript, HTML, and CSS for crafting interactive and
          user-centric websites, I love bringing ideas to life in the browser.
        </p>
      </div>
    </section>
  );
};

export default About;
