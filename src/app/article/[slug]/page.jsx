"use client";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import ArticleReact from "@/app/components/Posts/ArticleReact";
import AuthorArticle from "@/app/components/Posts/AuthorArticle";
import SectionDescription from "@/app/components/Posts/SectionDescription";
import { posts } from "@/app/data/posts";
import ArticleContnet from "@/app/components/Posts/ArticleContnet";
import ArticleImage from "@/app/components/Posts/ArticleImage";
import Comments from "@/app/components/Posts/comment/Comments";

const ArticleDetails = () => {
    const pathname = usePathname();
    const slug = pathname.split('/').pop();
    const [id] = slug.split("-");
    const [article, setArticle] = useState(null);
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        const post = posts.find((art) => art.id.toString() === id);
        setArticle(post);
        if (post) {
            setCommentCount(post.comments.length);
        }
    }, [id]);

    const handleCommentAdded = (newComment) => {
        setCommentCount((prevCount) => prevCount + 1);
        // Optionally, you can also update the article's comment list in the state
        setArticle((prevArticle) => ({
            ...prevArticle,
            comments: [...prevArticle.comments, newComment],
        }));
    };

    if (!article) {
        return (
            <div
                className="col-12 d-flex justify-content-center align-items-center"
                style={{ minHeight: "80vh" }}
            >
                <h2>Something Went Wrong</h2>
            </div>
        );
    }

    return (
        <div className="col" key={article.id}>
            <SectionDescription title={article.title} />
            <div className="card h-100 border-0 rounded-4 p-2 overflow-hidden shadow-sm transition-shadow duration-300 bg-gray-900 ">
                <ArticleImage
                    source={article.PostImage}
                    altrenative={article.title}
                />
                <div className="card-body p-4 d-flex flex-column gap-2 ">
                    <ArticleContnet
                        title={article.title}
                        contnet={article.content.substring(0, 200)}
                        length={article.content.length}
                    />
                    <ArticleReact
                        like={article.likes}
                        comment={commentCount}
                        time={article.createdAt}
                    />
                    <AuthorArticle
                        source={article.author.photo}
                        altrenative={article.author.name}
                        authorName={article.author.name}
                        specialization={article.author.specialization}
                    />
                </div>
            </div>
            <Comments
                postId={article.id}
                onCommentAdded={handleCommentAdded}
            />
        </div>
    );
};

export default ArticleDetails;

