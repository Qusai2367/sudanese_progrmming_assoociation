import React from 'react'
import Search from './Search';

const MainHero = ({ mainDescription, mainTitle, search }) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center text-center gap-4 ">
                <h2
                    className="text-white display-5 fw-bold lh-tight"
                    style={{ maxWidth: "48rem" }}
                >
                    {mainTitle}
                   
                </h2>
                <p
                    className=" fs-5 fw-normal lh-base  "
                    style={{ maxWidth: "60rem", color: "#99a1af" }}
                >
                    {mainDescription}
                   
                </p>
                {search}
            </div>
        </>
    );
};

export default MainHero
