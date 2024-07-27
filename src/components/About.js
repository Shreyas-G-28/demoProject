import React from "react";
import "./About.css";
import backgroundGraphic from "./images/background-graphic.svg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hi, I'm Shreyas Acharya, a front-end developer specializing in React.
        Proficient in JavaScript, HTML, and CSS for crafting interactive and
        user-centric websites, I love bringing ideas to life in the browser.
      </p>
      <img
        src={backgroundGraphic}
        alt="Background Graphic"
        className="background-graphic"
      />
    </section>
  );
};

export default About;
