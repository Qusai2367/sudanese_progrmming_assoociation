"use client";
import { useState } from "react";
import LikeButton from "./LikeButton";
import styles from "./Comment.module.css";

const Comment = ({ comment, onReplySubmit }) => {
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReplySubmit(comment.id, replyText);
      setReplyText("");
      setReplying(false);
    }
  };

  return (
      <div className={styles.commentContainer}>
          <p className={styles.commentText}>{comment.text}</p>
          <div className="flex items-center justify-between mt-2">
              <p className={styles.commentAuthor}>by {comment.author}</p>
              <LikeButton initialLikes={comment.likes} />
          </div>
          <button
              onClick={() => setReplying(!replying)}
              // className={styles.replyButton}
              style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "var(--color-gray-400)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  marginTop: "0.5rem",
              }}
          >
              Reply
          </button>
          {replying && (
              <form onSubmit={handleReplySubmit} className={styles.replyForm}>
                  <textarea
                      style={{
                          backgroundColor: "var(--color-gray-700)",
                          borderRadius: "0.375rem",
                          padding: "0.5rem",
                          width: "100%",
                          resize: "none",
                      }}
                      rows="2"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`Replying to ${comment.author}...`}
                  ></textarea>
                  <button
                      type="submit"
                      style={{
                          border: "none",
                          backgroundColor: "transparent",
                          color: "var(--color-gray-400)",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                          marginTop: "0.5rem",
                      }}
                 
                  >
                      Post Reply
                  </button>
              </form>
          )}
          {comment.replies && comment.replies.length > 0 && (
              <div className={styles.repliesContainer}>
                  {comment.replies.map((reply) => (
                      <Comment
                          key={reply.id}
                          comment={reply}
                          onReplySubmit={onReplySubmit}
                      />
                  ))}
              </div>
          )}
      </div>
  );
};

export default Comment;
