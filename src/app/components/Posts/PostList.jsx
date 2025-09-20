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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
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
                                    <div className="d-flex align-items-center gap-2">
                                        <Image
                                            src={post.author.photo}
                                            alt={post.author.name}
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            className="mt-3 ml-4"
                                        >
                                            <h6 className="card-title text-light  fw-semibold lh-sm">
                                                {post.author.name}
                                            </h6>
                                            <p className="fs-6 fw-normal lh-base text-gra">
                                                {post.author.specialization}
                                            </p>
                                        </div>
                                    </div>
                                    <h5 className="card-title text-light fs-5 fw-semibold lh-sm">
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
