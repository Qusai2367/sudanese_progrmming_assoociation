import React from "react";
import Image from "next/image";
import { testimonials } from "./testimonials";
import { renderStars } from "../../Service/ProviderCard";

const Stars = ({ rating }) => {
    const full = Math.max(0, Math.min(5, Math.floor(Number(rating) || 0)));
    const empty = 5 - full;
    return (
        <div className="d-flex align-items-center gap-1">
            {Array.from({ length: full }).map((_, i) => (
                <Image
                    key={`f-${i}`}
                    src="/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                />
            ))}
            {Array.from({ length: empty }).map((_, i) => (
                <Image
                    key={`e-${i}`}
                    src="/star-empty.svg"
                    alt="star"
                    width={16}
                    height={16}
                />
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="spacing text-white">
            <div className="text-center mb-5">
                <h2 className="fw-bold display-6">
                    Testimonials that{" "}
                    <span className="t-red">Speak to Our Results</span>
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
                        <div className="star-rating me-2">
                            {renderStars(test.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
