import React from "react";

const Search = () => {
    return (
        <div
            className="px-4 py-3 w-100 bg-gray-400"
            style={{ maxWidth: "32rem" }}
        >
            <label
                className="d-flex flex-column w-100"
                style={{ minWidth: "10rem", height: "3.5rem" }}
            >
                <div className="d-flex w-100 flex-grow-1 align-items-stretch rounded-pill h-100 shadow-sm">
                    <div className="text-muted d-flex bg-white align-items-center justify-content-center ps-4 rounded-start-pill border-0">
                        <svg
                            fill="currentColor"
                            height="24px"
                            viewBox="0 0 256 256"
                            width="24px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                    </div>
                    <input
                        className="form-control flex-grow-1 w-100 rounded-end-pill bg-gray-400 bg-white h-100 px-4 fs-6 fw-normal lh-normal border-0 shadow-none"
                        placeholder="Search articles, tips, and projects..."
                    />
                </div>
            </label>
        </div>
    );
};

export default Search;
