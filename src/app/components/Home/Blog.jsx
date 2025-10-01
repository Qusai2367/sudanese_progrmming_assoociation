import React from "react";
import { posts } from "../../data/posts";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/app/components/Posts/PostList";

const Blog = () => {
    return (
        <section className="spacing text-white blog-section">
            <div className="section-header">
                <h2>From Our Blog Posts</h2>
                <p>Stay updated with our latest insights, tips, and industry news</p>
            </div>
            
            <div className="blog-grid">
                {posts.length === 0 ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh", gridColumn: "1 / -1" }}>
                        <h2 className="text-gra">Blog is Empty</h2>
                    </div>
                ) : (
                    posts.map((post) => {
                        const slug = `${post.id}-${slugify(post.title)}`;
                        return (
                            <Link
                                key={post.id}
                                href={`/article/${slug}`}
                                className="blog-card"
                            >
                                <div className="blog-image">
                                    <Image
                                        src={post.PostImage || post.image}
                                        alt={post.title}
                                        width={400}
                                        height={220}
                                        className="blog-image-element"
                                    />
                                </div>
                                
                                <div className="blog-content">
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">
                                        {post.content.substring(0, 150)}
                                        {post.content.length > 150 && "..."}
                                    </p>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default Blog;
