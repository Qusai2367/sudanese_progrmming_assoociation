import ServicesList from "./ServicesList";
import { providers } from "../../data/providers";

const Services = () => {
  return (
      <section className="spacing text-white services-section">
          <div className="section-header">
              <h2>Our Services</h2>
              <p>Discover our comprehensive range of professional services designed to meet your needs</p>
          </div>
          <ServicesList providers={providers} limit={3}/>
      </section>
  );
};

export default Services;