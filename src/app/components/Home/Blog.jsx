import React from "react";
import { posts } from "../../data/posts";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/app/components/Posts/PostList";

const Blog = () => {
    return (
        <section className="spacing bg-gray-900 text-white">
            <div className="text-center mb-5">
                <h2 className="fw-bold display-6">From Our Blog Posts</h2>
            </div>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                {posts.length === 0 ? (
                    <div
                        className="cols-md-2 cols-lg-3 col-12 d-flex justify-content-center align-items-center"
                        style={{ minHeight: "80vh" }}
                    >
                        <h2>Blog is Empty</h2>
                    </div>
                ) : (
                    posts.map((post) => {
                        const slug = `${post.id}-${slugify(post.title)}`;
                        return (
                            <div className="col " key={post.id}>
                                <Link
                                    href={`/article/${slug}`}
                                    className="card h-100 border-0 rounded-4 p-2 overflow-hidden shadow-sm transition-shadow duration-300 bg-gray-800 "
                                >
                                    <div
                                        className="w-100 position-relative"
                                        style={{ height: "200px" }}
                                    >
                                        <Image
                                            src={post.PostImage || post.image}
                                            alt={post.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-top"
                                        />
                                    </div>
                                    <div className="card-body p-4 d-flex flex-column gap-2 ">
                                        <h5 className="card-title text-light fs-5 fw-semibold lh-sm">
                                            {post.title}
                                        </h5>
                                        <p className="fs-6 fw-normal lh-base text-gra">
                                            {post.content.substring(0, 200)}
                                            {post.content.length > 200 && "..."}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default Blog;
