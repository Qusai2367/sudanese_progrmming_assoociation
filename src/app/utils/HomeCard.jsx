import Image from "next/image";

const HomeCard = ({ image, ImageAlt, Maintitle, description1, description2, description3 }) => {
    return (
        <div  className="bg-gray-900 p-3 rounded shadow cardLight"
            style={{ width: "20rem" }}>
      
            <Image
              src={image}
              alt={ImageAlt}
              className="img-fluid rounded mb-3"
              style={{ objectFit: "cover", height: "200px", width: "100%" }}
            />
            <h5 className="fw-bold textDarkMode">{Maintitle}</h5>
            <p className="text-gra fs-6 ">{description1}</p>
            <p className="text-gra fs-6">{description2}</p>
            <p className="text-gra fs-6">{description3}</p>
        </div>
    );
};

export default HomeCard