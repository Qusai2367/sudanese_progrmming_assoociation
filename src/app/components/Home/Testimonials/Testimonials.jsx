import React from "react";
import Image from "next/image";
import { testimonials } from "../../../data/testimonials";
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
        <section className="spacing text-white testimonials-section">
            <div className="section-header">
                <h2>
                    Testimonials that{" "}
                    <span className="t-red">Speak to Our Results</span>
                </h2>
            </div>
            
            <div className="testimonials-grid">
                {testimonials.map((test, index) => (
                    <div key={index} className="testimonial-card custom-card">
                        <div className="testimonial-quote ms-3">
                            {test.feedback}
                        </div>
                        
                        <div className="testimonial-author">
                            <div className="testimonial-name">{test.name}</div>
                            <div className="testimonial-role">{test.role}</div>
                            <div className="testimonial-rating star-rating me-2">
                                {renderStars(test.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
