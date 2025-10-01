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
            className="service-card"
        >
            {/* Profile Section */}
            <div className="service-profile">
                <div className="service-avatar">
                    <Image
                        src={provider.profilePicture}
                        alt={provider.name}
                        fill
                        className="service-avatar-img"
                    />
                </div>
                <div className="service-info">
                    <h3 className="service-name">
                        {provider.name}
                    </h3>
                    <p className="service-type">
                        {provider.serviceType}
                    </p>
                </div>
            </div>

            {/* Rating Section */}
            <div className="service-rating">
                <div className="service-stars">
                    {renderStars(provider.rating)}
                </div>
                <span className="service-rating-value">
                    {provider.rating}
                </span>
                <span className="service-reviews">
                    ({provider.totalReviews} reviews)
                </span>
            </div>

            {/* Bio Section */}
            <p className="service-bio">
                {provider.bio}
            </p>

            {/* Stats Section */}
            <div className="service-stats">
                <div className="service-projects">
                    <span className="service-projects-count">
                        {provider.projectsCompleted}
                    </span>{" "}
                    projects completed
                </div>
                <div className="service-rate">
                    {provider.hourlyRate}
                </div>
            </div>

            {/* Skills Section */}
            <div className="service-skills">
                <div className="service-skills-list">
                    {(provider.skills || [])
                        .slice(0, 3)
                        .map((skill, index) => (
                            <span
                                key={index}
                                className="service-skill-tag"
                            >
                                {skill}
                            </span>
                        ))}
                </div>
                {(provider.skills?.length || 0) > 3 && (
                    <div className="service-more-skills">
                        +{(provider.skills?.length || 0) - 3} more skills
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ProviderCard;
