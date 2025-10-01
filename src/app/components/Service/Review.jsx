import { useState } from "react";
import { Alert } from "react-bootstrap";

const Review = ({ providerData, setProviderData }) => {
    const [newRating, setNewRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [clientName, setClientName] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState(""); // "success", "danger", "warning"
    return (
        <div>
            <div className="bg-gray-800 rounded p-4  service-card">
                <h3 className="h5 fw-bold mb-3 text-white textDarkMode">Add Your Review</h3>
                
                {/* Alert Messages */}
                {alertMessage && (
                    <Alert
                        variant={alertType}
                        onClose={() => setAlertMessage("")}
                        dismissible
                        className="mb-3"
                    >
                        {alertMessage}
                    </Alert>
                )}
                
                <div className="mb-3 d-flex align-items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            className="bg-transparent border-0 p-0 m-0 "
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setNewRating(star)}
                            aria-label={`Rate ${star}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                className={
                                    (hoverRating || newRating) >= star
                                        ? "text-warning"
                                        : "text-gray-500"
                                }
                                fill={
                                    (hoverRating || newRating) >= star
                                        ? "#FFD700"
                                        : "#d1d5db"
                                }
                            >
                                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 12 20.201 4.665 24 6 15.602 0 9.748l8.332-1.593z" />
                            </svg>
                        </button>
                    ))}
                </div>
                <div className="mb-3">
                    <label className="form-label text-white textDarkMode">Your Name</label>
                    <input
                        type="text"
                        className="input-style-2 form-control bg-gray-700 text-white border-gray-600"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white textDarkMode">Your Review</label>
                    <textarea
                        className="input-style form-control bg-gray-700 text-white border-gray-600"
                        rows={3}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Describe your experience with this service provider"
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button
                        className="btn bg-red text-white"
                        onClick={() => {
                            // Clear any existing alerts
                            setAlertMessage("");
                            
                            // Validation
                            if (!newRating) {
                                setAlertMessage("Please select a rating");
                                setAlertType("danger");
                                return;
                            }
                            if (!clientName.trim()) {
                                setAlertMessage("Please enter your name");
                                setAlertType("danger");
                                return;
                            }
                            if (!newComment.trim()) {
                                setAlertMessage("Please write a review");
                                setAlertType("danger");
                                return;
                            }

                            // Calculate new rating average
                            const newTotal = providerData.totalReviews + 1;
                            const newAvg =
                                (providerData.rating *
                                    providerData.totalReviews +
                                    newRating) /
                                newTotal;

                            // Create new review
                            const newReview = {
                                clientName: clientName.trim(),
                                rating: newRating,
                                comment: newComment.trim(),
                                date: new Date().toISOString().slice(0, 10),
                            };

                            // Update provider data
                            const newFeedback = [newReview, ...(providerData.feedback || [])];
                            
                            setProviderData({
                                ...providerData,
                                rating: Number(newAvg.toFixed(1)),
                                totalReviews: newTotal,
                                feedback: newFeedback,
                            });

                            // Reset form
                            setNewRating(0);
                            setHoverRating(0);
                            setNewComment("");
                            setClientName("");

                            // Show success message
                            setAlertMessage("Review submitted successfully! Thank you for your feedback.");
                            setAlertType("success");
                            
                            // Auto-hide success message after 3 seconds
                            setTimeout(() => {
                                setAlertMessage("");
                            }, 3000);
                        }}
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Review