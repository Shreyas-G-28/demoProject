import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Youtube Clone",
      description:
        "Utilized React Hooks, JavaScript, Redux, Tailwind CSS, and Jest in this project, improving development efficiency by 40%",
      link: "http://link-to-project-one.com",
    },
    {
      title: "Online Bidding System",
      description:
        "Online bidding is a very broad domain, allowing people to buy a wide range of commodities on the internet.",
      link: "http://link-to-project-two.com",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="background-graphic"></div>
      <div className="background-graphic"></div>
      <div className="background-graphic"></div>
    </section>
  );
};

export default Projects;
