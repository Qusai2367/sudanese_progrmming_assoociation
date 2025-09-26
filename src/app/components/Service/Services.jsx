import ServicesList from "./ServicesList";
import { providers } from "../../data/providers";

const Services = () => {
  return (
      <section className="spacing bg-gray-800 text-white bg-gradient-2">
          <div className="text-center mb-5">
              <h2 className="fw-bold display-6">Our Services</h2>
              <p className="text-gra fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
              </p>
          </div>
       <ServicesList providers={providers} limit={3}/>
      </section>
  );
};

export default Services;