'use client';

import { useState, useEffect } from 'react';
import Comment from './Comment';
import styles from "./Comment.module.css";

const Comments = ({ postId, onCommentAdded }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`/api/comments?postId=${postId}`);
            const data = await res.json();
            setComments(data);
        };
        fetchComments();
    }, [postId]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, text: newComment, author: 'Guest' }),
            });
            const newCommentData = await res.json();
            setComments((prev) => [...prev, newCommentData]);
            onCommentAdded(newCommentData);
            setNewComment('');
        }
    };

    const handleReplySubmit = async (parentId, text) => {
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postId, text, author: 'Guest', parentId }),
        });
        const newReplyData = await res.json();

        const addReply = (arr) =>
            arr.map((c) => {
                if (c.id === parentId) {
                    return {
                        ...c,
                        replies: [...c.replies, newReplyData],
                    };
                } else {
                    return { ...c, replies: addReply(c.replies || []) };
                }
            });
        setComments((prev) => addReply(prev));
    };



    return (
        <div id="comments" className={styles.commentsSection}>
            <h3 className="text-light textDarkMode">Comments</h3>
            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                <textarea
                    className="border-0 px-4 py-3 rounded-4 input-style "
                    rows="2"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Join the conversation..."
                    
                ></textarea>
                <button
                    type="submit"
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </form>
            <div className="service-card">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        onReplySubmit={handleReplySubmit}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comments;
