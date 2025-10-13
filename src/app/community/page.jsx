"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import img1 from "../assets/7.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/8.jpg";
import Button from "../components/Button";
import { events } from "../data/events";
import { contents } from "../data/contents";
import Loader from "..//components/Loader";

const Community = () => {
  const images = [
    {
      src: img1,
      title: "Welcome to our community!",
      text: "Here. you can connect with others, share your experiences, ask questions, and learn new things together",
    },
    {
      src: img2,
      title: "Your Space To Belong.",
      text: "Our community is built for collaboration and support. Whether you're here to learn. network, or just chat, you'll always find someone ready to help.",
    },
    {
      src: img3,
      title: "Discover our community!",
      text: "A place where you can connect, share experiences, and grow together. Join discussions, discover new ideas, and be part of somthing bigger.",
    },
  ];

  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main>
      <Loader delay={2000} />
      {/* hero section */}
      <section
        className="mb-5"
        style={{ position: "relative", overflowX: "hidden" }}
      >
        <Image
          src={images[currentImg].src}
          alt="Community Image"
          style={{
            width: "100vw",
            height: "70vh",
            objectFit: "cover",
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{ color: "#ea2a33" }}>{images[currentImg].title}</h1>
          <p>{images[currentImg].text}</p>

          <div className="text-center d-flex justify-content-center mt-3 align-items-center">
            <Button title={"Join our community"} customizBtn={"-"} />
          </div>
        </div>
      </section>
      {/* events section */}
      <section className="container mb-5 py-5">
        <div className="text-center d-flex justify-content-center mt-3 align-items-center m-3">
          <h1>Events</h1>
        </div>
        {events.map((event) => (
          <div
            key={event.id}
            className="card mb-3 d-flex justify-content-between service-card flex-sm-column flex-md-row shadow-sm"
          >
            <div className="col-md-4">
              <Image
                src={event.img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="event iamge"
                className="img-fluid rounded-end mb-3"
              />
            </div>
            <div className="col-md-8 p-3 .light .textDarkMode">
              <h6 className="text-secondary mb-2">{event.date}</h6>
              <h2>{event.title}</h2>
              <p>Location: {event.location}</p>
              <h5>organization: {event.organzier}</h5>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center mb-5 align-items-center">
          <Button title={"Show more"} customizBtn={"-outline-"} />
        </div>
      </section>
      {/* Content section */}
      <section className="container mb-5 py-5">
        <div className="text-center d-flex justify-content-center mt-3 align-items-center m-3">
          <h1>Content</h1>
        </div>
        {contents.map((content) => (
          <div
            key={content.id}
            className="card mb-3 service-card d-flex justify-content-between flex-sm-column flex-md-row shadow-sm"
            // style={{ backgroundColor: "#1e2939" }}
          >
            <div className="col-md-4">
              <Image
                src={content.img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="event iamge"
                className="img-fluid rounded-end"
              />
            </div>
            <div className="col-md-8 p-3 .light .textDarkMode">
              <h4 className="text-danger">{content.type}</h4>
              <h2>{content.title}</h2>
              <p>{content.desc}</p>
              <h6 className="mb-2">{content.date}</h6>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center mb-5 align-items-center">
          <Button title={"See all content"} customizBtn={"-outline-"} />
        </div>
      </section>
      <div className="d-flex fs-3 justify-content-center mb-5 flex-column align-items-center">
        <p>Ready to get started? Join the SPA community today!</p>
        <div>
          <Button title={"Join our communit"} customizBtn={"-"} />
        </div>
      </div>
    </main>
  );
};

export default Community;
