"use client";
import React, { useState } from "react";
import { providers } from "../../data/providers";
import ServicesList from "./ServicesList";
import ServiceFilter from "./ServiceFilter";

const HandleCLinetService = () => {
    const [search, setSearch] = useState("");
    const [minRating, setMinRating] = useState(0);
    const [category, setCategory] = useState("all");

    // Filter providers based on current filter state
    const filteredProviders = providers.filter(
        (p) =>
            (p.name.toLowerCase().includes(search.toLowerCase()) ||
                p.serviceType.toLowerCase().includes(search.toLowerCase())) &&
            p.rating >= minRating &&
            (category === "all" || p.category === category)
    );

    return (
        <>
            <ServiceFilter
                search={search}
                setSearch={setSearch}
                minRating={minRating}
                setMinRating={setMinRating}
                category={category}
                setCategory={setCategory}
            />
            <div className=" py-5">
                <ServicesList providers={filteredProviders} />
            </div>
        </>
    );
};

export default HandleCLinetService;
