import { posts } from "@/app/data/posts";
import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, Clock } from "react-feather";
import Link from "next/link";

export const slugify = (str) =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

const PostList = () => {
    return (
        <div className="experience-grid">
            {posts.length === 0 ? (
                <div
                    className="col-12 d-flex justify-content-center align-items-center"
                    style={{ minHeight: "80vh" }}
                >
                    <h2>Blog is Empty</h2>
                </div>
            ) : (
                posts.map((post) => {
                    const slug = `${post.id}-${slugify(post.title)}`;
                    return (
                        <div className="service-card  " key={post.id}>
                            <Link href={`/article/${slug}`}>
                                <div
                                    className="w-100 position-relative"
                                    style={{ height: "200px" }}
                                >
                                    <Image
                                        src={post.PostImage}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                        className="rounded-top"
                                    />
                                </div>

                                <div className="card-body p-4 d-flex flex-column gap-2 ">
                                    <div className="d-flex align-items-center gap-2">
                                        <Image
                                            src={post.author.photo}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                        />
                                        <div className="service-info">
                                            <h3 className="service-name">
                                                {post.author.name}
                                            </h3>
                                            <p className="service-type">
                                                {post.author.specialization}
                                            </p>
                                        </div>
                                    </div>
                                    <h5 className="card-title text-light fs-5 fw-semibold lh-sm textDarkMode">
                                        {post.title}
                                    </h5>
                                    <p className="fs-6 fw-normal lh-base text-gra">
                                        {post.content.substring(0, 200)}
                                        {post.content.length > 200 && "..."}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <div className="d-flex align-items-center gap-2">
                                            <Heart
                                                size={18}
                                                className="text-gra"
                                            />
                                            <span className="text-gra">
                                                {post.likes}
                                            </span>
                                            <MessageCircle
                                                size={18}
                                                className="text-gra"
                                            />
                                            <span className="text-gra">
                                                {post.comments.length}
                                            </span>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <Clock
                                                size={18}
                                                className="text-gra"
                                            />
                                            <span className="text-gra">
                                                {new Date(
                                                    post.createdAt
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default PostList;
