import React from "react";

const ArticleContnet = ({ title, contnet, length }) => {
    return (
        <>
            <h5 className="card-title text-light fs-5 fw-semibold lh-sm mb-4 textDarkMode">
                {title}
            </h5>
            <p className="fs-6 fw-normal lh-base text-gra">
                {contnet}
                {length > 200 && "..."}
            </p>
        </>
    );
};

export default ArticleContnet;
