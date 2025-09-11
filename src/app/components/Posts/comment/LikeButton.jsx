"use client";
import { useState } from "react";
import { Heart } from "react-feather";

const LikeButton = ({ initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
        } else {
            setLikes(likes - 1);
            setLiked(false);
        }
    };

    return (
        <div
            onClick={handleLike}
            className={`like-button ${
                liked ? "liked" : ""
            } hover:text-blue-400 text-gra`}
        >
            <div className="d-flex align-items-center gap-2">
                <Heart />
                <span>{likes}</span>
            </div>
        </div>
    );
};

export default LikeButton;