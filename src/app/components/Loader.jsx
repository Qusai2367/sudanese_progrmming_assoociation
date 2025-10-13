"use client";

import { useState, useEffect } from "react";

export default function Loader({ delay = 2000 }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    if (!show) return null;

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="text-center">
                <div
                    className="spinner-border text-danger"
                    role="status"
                    style={{ width: "4rem", height: "4rem" }}
                >
                    <span className="visually-hidden">Loading...</span>
                </div>

                <p
                    className=" mt-3 brand"
                    style={{ fontSize: "1.2rem", fontWeight: "500",color:"#99a1af" }}
                >
                    Loading...
                </p>
            </div>
        </div>
    );
}
