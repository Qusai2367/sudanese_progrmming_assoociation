import React from "react";
import {services} from "./services";
import Image from "next/image";

const Services = () => {
  return (
      <section className="spacing bg-gray-800 text-white">
          <div className="text-center mb-5">
              <h2 className="fw-bold display-6">Our Services</h2>
              <p className="text-gra fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
              </p>
          </div>
          <div className="d-flex flex-wrap gap-4 justify-content-center">
              {services.map((service, index) => (
                  <div
                      key={index}
                      className="bg-gray-900 p-4 rounded shadow d-flex flex-column align-items-center text-center"
                      style={{ width: "18rem" }}
                  >
                      <Image
                          src={service.icon}
                          alt={service.title}
                          className="mb-3 rounded-circle"
                          style={{
                              width: "100px",
                              height: "100px",

                    
                          }}
                      />
                      <h4 className="fw-bold mb-2">{service.title}</h4>
                      <p className="text-gra fs-6">{service.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
};

export default Services;