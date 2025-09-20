import React from "react";

const CTA = () => {
  return (
    <section className="spacing bg-gray-800 text-white text-center">
      <h2 className="fw-bold display-6 mb-4">
        Have An Awesome Project Idea? <span className="t-red">Let's Discuss</span>
      </h2>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn bg-red text-white fw-bold px-4 py-2 rounded-pill">
          Let's build
        </button>
        <button className="btn btn-outline-light fw-bold px-4 py-2 rounded-pill">
          Contact
        </button>
      </div>
    </section>
  );
};

export default CTA;