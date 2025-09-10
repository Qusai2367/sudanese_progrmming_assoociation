import Tips from "../components/Posts/Tips";
import ArticleHero from "../components/Posts/ArticleHero";
import FeatuerArticle from "../components/Posts/FeatuerArticle";
import ProjectUpdates from "../components/Posts/ProjectUpdates";

const Article = () => {
    return (
        <main className="Article-spacing d-flex flex-1 justify-content-center">
            <div
                className="container-fluid d-flex flex-column"
                style={{ maxWidth: "1200px" }}
            >
                <ArticleHero />
                <FeatuerArticle />
                <Tips />
                <ProjectUpdates />
            </div>
        </main>
    );
};

export default Article;
