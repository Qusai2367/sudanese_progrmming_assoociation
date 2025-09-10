import React from "react";
import PostList from "./PostList";
import SectionDescription from "./SectionDescription";

const FeatuerArticle = () => {
    return (
        <section>
            <SectionDescription title="Featured Articles" />
            <PostList />
        </section>
    );
};

export default FeatuerArticle;
