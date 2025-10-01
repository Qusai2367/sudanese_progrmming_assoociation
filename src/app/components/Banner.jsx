import React from "react";

const Banner = ({ mainDescription, mainTitle, search }) => {
    return (
        <>
            <div className="rounded-4 d-flex flex-column align-items-center text-center gap-4 ">
                <div className="section-header">
                    <h2>{mainTitle}</h2>
                </div>

                <p
                    className=" fs-5 fw-normal lh-base banner-font brand "
                    style={{ maxWidth: "60rem" }}
                >
                    {mainDescription}
                </p>
                {search}
            </div>
        </>
    );
};

export default Banner;
