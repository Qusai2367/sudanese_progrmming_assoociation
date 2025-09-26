import React from "react";
import {portfolio} from "./portfolio";

const Portfolio = () => {
  return (
    <section className="spacing text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6"> Portfolio</h2>
        <p className="text-gra fs-6">
          Let’s have a look at some of my recent work and case studies.
        </p>
      </div>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {portfolio.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-3 rounded shadow"
            style={{ width: "20rem" }}
          >
            {/* <img
              src={project.image}
              alt={project.title}
              className="img-fluid rounded mb-3"
              style={{ objectFit: "cover", height: "200px", width: "100%" }}
            /> */}
            <h5 className="fw-bold">{project.title}</h5>
            <p className="text-gra fs-6">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;