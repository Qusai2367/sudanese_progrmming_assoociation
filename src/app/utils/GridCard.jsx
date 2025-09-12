import React from "react";
import Card from "./Card";

const GridCard = ({ header, title }) => {
    return (
        <div className=" ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4 text-center justify-content-center">
                <Card
                    header="Our Mission"
                    title="To provide accessible, high-quality technology education,
                  foster a collaborative and inclusive community, and drive
                  innovative solutions that address local challenges and
                  contribute to Sudan's growth."
                />
                <Card
                    header="Our Vision"
                    title="To be the leading catalyst for technological advancement and innovation in Sudan, empowering individuals and communities to thrive in the digital age."
                />
             
            </div>
        </div>
    );
};

export default GridCard;
