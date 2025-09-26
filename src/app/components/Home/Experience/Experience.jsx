import React from "react";
import {experience} from "./experience";

const Experience = () => {
  return (
    <section className="spacing text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6"> Work Experience</h2>
      </div>
      <div className="d-flex flex-column gap-4">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="d-flex flex-column flex-md-row justify-content-between align-items-start bg-gray-800 p-4 rounded shadow"
          >
            <div>
              <h5 className="fw-bold">{exp.position}</h5>
              <p className="text-gra mb-1">{exp.company}</p>
              <p className="small text-gra">{exp.period}</p>
            </div>
            <p className="text-gra mt-3 mt-md-0" style={{ maxWidth: "40rem" }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;