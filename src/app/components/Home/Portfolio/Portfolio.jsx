import React from "react";
import {portfolio} from "../../../data/portfolio";
import Image from "next/image";
import { GitHub, ExternalLink } from "react-feather";

const Portfolio = () => {
  return (
    <section className="spacing text-white portfolio-section">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <p>
          Let's have a look at some of my recent work and case studies.
        </p>
      </div>
      
      <div className="portfolio-grid">
        {portfolio.map((project, index) => (
          <div key={index} className=" experience-card custom-card">
            <div className="experience-image">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={220}
                className="experience-image-element"
              />
            </div>
            
            <h3 className="portfolio-title">{project.title}</h3>
            <p className="portfolio-description">{project.description}</p>
            
            <div className="portfolio-tech-section">
              <span className="portfolio-tech-label">Technologies</span>
              <div className="portfolio-tech-tags">
                {project.tech.split(',').map((tech, techIndex) => (
                  <span key={techIndex} className="portfolio-tech-tag">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="portfolio-links">
              <a
                href={`https://${project.GitHub}`}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                <GitHub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={`https://${project.demo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;