import React from "react";
import {testimonials} from "./testimonials";

const Testimonials = () => {
  return (
    <section className="spacing bg-gray-900 text-white">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">
          Testimonials that <span className="t-red">Speak to Our Results</span>
        </h2>
      </div>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {testimonials.map((test, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded shadow"
            style={{ width: "20rem" }}
          >
            <p className="text-gra mb-3">"{test.feedback}"</p>
            <h6 className="fw-bold">{test.name}</h6>
            <span className="text-gra small">{test.role}</span>
            <div className="mt-2">
              {"⭐".repeat(test.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;