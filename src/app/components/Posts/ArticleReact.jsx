import { Clock, MessageCircle } from "react-feather";
import LikeButton from "./comment/LikeButton";

const ArticleReact = ({ comment, like, time }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mt-auto">
            <div className="d-flex align-items-center gap-3">
                <LikeButton initialLikes={like} />
                <a
                    href="#comments"
                    className="flex items-center gap-1 text-gra hover:text-blue-400 transition-colors"
                >
                    <div className="d-flex align-items-center gap-2">
                        <MessageCircle size={18} />
                        <span>{comment}</span>
                    </div>
                </a>
            </div>
            <div className="d-flex align-items-center gap-2">
                <Clock size={18} className="text-gra" />
                <span className="text-gra">
                    {new Date(time).toLocaleDateString()}
                </span>
            </div>
        </div>
    );
};

export default ArticleReact;
