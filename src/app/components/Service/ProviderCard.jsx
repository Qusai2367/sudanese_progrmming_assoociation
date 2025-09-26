import Link from "next/link";
import Image from "next/image";

const StarIcon = ({ type = "empty", className = "w-4 h-4" }) => {
    if (type === "full") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
                <path fill="#FFD700" d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 12 20.201 4.665 24 6 15.602 0 9.748l8.332-1.593z"/>
            </svg>
        );
    }
    if (type === "half") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
                {/* النص نجمة: أصفر في الشمال (يسار) */}
                <path fill="#FFD700" d="M12 .587V20.201L4.665 24 6 15.602 0 9.748l8.332-1.593z"/>
                {/* النص نجمة: رمادي في اليمين */}
                <path fill="#d1d5db" d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 12 20.201V.587z"/>
            </svg>
        );
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
            <path fill="#d1d5db" d="M12 .587l3.668 7.568L24 9.748l-6 5.854L19.335 24 12 20.201 4.665 24 6 15.602 0 9.748l8.332-1.593z"/>
        </svg>
    );
};



export const renderStars = (rating) => {
    const stars = [];
    const numericRating = Number.isFinite(Number(rating)) ? Number(rating) : 0;

    // لو التقييم أكبر من 5 نقصو للـ 5
    const clamped = Math.min(5, Math.max(0, numericRating));

    // نطرح 1 من التقييم لو في كسر، علشان دايرين 4.5 مش 5.5
    const adjusted = clamped > 5 ? 5 : clamped;

    // عدد النجوم الكاملة
    const fullStars = Math.floor(adjusted);

    // لو في أي كسر > 0 نخلي نص نجمة
    const hasHalfStar = adjusted % 1 !== 0;

    // نكمل الباقي نجوم فاضية
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<StarIcon key={`full-${i}`} type="full" />);
    }

    if (hasHalfStar) {
        stars.push(<StarIcon key="half" type="half" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<StarIcon key={`empty-${i}`} type="empty" />);
    }

    return stars;
};

const ProviderCard = ({ provider }) => {
    return (
        <Link
            href={`/services/${provider.id}`}
            className="text-decoration-none border-none"
        >
            <div className="provider-card bg-gray-900 rounded shadow-lg p-4 h-100">
                {/* Profile Picture */}
                <div className="d-flex align-items-center mb-3">
                    <div
                        className="position-relative"
                        style={{ width: "60px", height: "60px" }}
                    >
                        <Image
                            src={provider.profilePicture}
                            alt={provider.name}
                            fill
                            className="rounded-circle object-fit-cover"
                        />
                    </div>
                    <div className="ms-3">
                        <h5 className="fw-bold text-white mb-1">
                            {provider.name}
                        </h5>
                        <p className="text-main mb-0 fw-medium">
                            {provider.serviceType}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="d-flex align-items-center mb-3">
                    <div className="star-rating me-2">
                        {renderStars(provider.rating)}
                    </div>
                    <span className="text-warning fw-semibold">
                        {provider.rating}
                    </span>
                    <span className="text-gra ms-2 small">
                        ({provider.totalReviews} reviews)
                    </span>
                </div>

                {/* Bio Preview */}
                <p
                    className="text-gra small mb-3"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {provider.bio}
                </p>

                {/* Stats */}
                <div className="d-flex justify-content-between align-items-center small mb-3">
                    <div className="text-gra">
                        <span className="fw-semibold text-white">
                            {provider.projectsCompleted}
                        </span>{" "}
                        projects completed
                    </div>
                    <div className="text-main fw-semibold">
                        {provider.hourlyRate}
                    </div>
                </div>

                {/* Skills Preview */}
                <div>
                    <div className="d-flex flex-wrap gap-1">
                        {(provider.skills || [])
                            .slice(0, 3)
                            .map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-800 text-gra px-2 py-1 rounded small"
                                >
                                    {skill}
                                </span>
                            ))}
                        {(provider.skills?.length || 0) > 3 && (
                            <span className="text-gra small">
                                +{(provider.skills?.length || 0) - 3} more
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProviderCard;
