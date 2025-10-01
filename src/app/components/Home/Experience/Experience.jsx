import { experience } from "@/app/data/experience";
import Image from "next/image";

const Experience = () => {
    return (
        <section className="spacing text-white experience-section">
            <div className="section-header">
                <h2>Work Experience</h2>
                <p>Over the past years, we have worked on diverse projects ranging from websites and mobile apps to payment solutions</p>
            </div>
            
            <div className="experience-grid">
                {experience.map((exp, index) => (
                    <div key={index} className="experience-card custom-card">
                        <div className="experience-image">
                            <Image
                                src={exp.project}
                                alt={exp.position}
                                width={400}
                                height={220}
                                className="experience-image-element"
                            />
                        </div>
                        
                        <h3 className="portfolio-title">{exp.position}</h3>
                        <div className="portfolio-description">
                            <p className="text-main fw-bold mb-2">{exp.company}</p>
                            <p className="text-gra mb-2">{exp.period}</p>
                            <p className="text-gra">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
