"use client";
import React, { useEffect, useState } from "react";
import { providers } from "../../data/providers";
import { renderStars } from "@/app/components/Service/ProviderCard";
import Image from "next/image";
import Link from "next/link";
import RequestServiceModal from "../../components/Service/requestService/RequestServiceModal";
import Review from "@/app/components/Service/Review";
import { useAuth } from "@/app/Context/AuthContext";
import { usePathname } from "next/navigation";
import Loader from "@/app/components/Loader";

const ProviderProfile = ({ params }) => {
    const [showRequestModal, setShowRequestModal] = useState(false);
    const { id } = React.use(params);
    const provider = providers.find((p) => p.id === parseInt(id));
    const [providerData, setProviderData] = useState(provider);
    const { requireAuth, user } = useAuth();
    const pathname = usePathname();

    useEffect(() => {
        requireAuth(pathname);
    }, [user, pathname]);

    if (!user) return null;

    if (!provider) {
        return (
            <div className="min-h-screen bg-gray-900 bg-service-provider flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Provider Not Found
                    </h1>
                    <p className="text-gray-400 mb-8">
                        The provider you're looking for doesn't exist.
                    </p>
                    <Link
                        href="/services"
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    function HandleConatctProvider() {
        setShowRequestModal(true);
    }

    return (
      <>
          <Loader delay={2000} />
          <div className="min-vh-100 bg-gray-900 text-white bg-service-provider">
            {/* Header */}
            <div className="profile-header border-bottom border-second service-card-2">
                <div className=" px-4 py-5">
                    <Link
                        href="/services"
                        className="d-inline-flex align-items-center text-main mb-4 text-decoration-none"
                    >
                        <svg
                            className="me-2"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Services
                    </Link>

                    <div className="row align-items-center">
                        <div className="col-md-2 mb-3 mb-md-0">
                            <div
                                className="position-relative mx-auto"
                                style={{ width: "120px", height: "120px" }}
                            >
                                <Image
                                    src={provider.profilePicture}
                                    alt={provider.name}
                                    fill
                                    className="rounded-circle object-fit-cover"
                                />
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div>
                                <h3 className="display-4 fw-bold mb-2 textDarkMode">
                                    {provider.name}
                                </h3>
                            </div>
                            <p className="fs-4 text-main mb-3">
                                {provider.serviceType}
                            </p>

                            <div className="d-flex align-items-center mb-3 ">
                                <div className="star-rating me-3">
                                    {renderStars(providerData.rating)}
                                </div>
                                <span className="text-warning fw-semibold fs-5">
                                    {providerData.rating}
                                </span>
                                <span className="text-gra ms-2">
                                    ({providerData.totalReviews} reviews)
                                </span>
                            </div>

                            <div className="d-flex flex-wrap gap-2 small">
                                <span className="bg-gray-700 px-3 py-2 rounded-pill">
                                    📍 {provider.location}
                                </span>
                                <span className="bg-gray-700 px-3 py-2 rounded-pill">
                                    💼 {provider.projectsCompleted} projects
                                </span>
                                <span className="bg-gray-700 px-3 py-2 rounded-pill">
                                    💰 {provider.hourlyRate}
                                </span>
                                <span className="bg-gray-700 px-3 py-2 rounded-pill">
                                    📅 Joined {provider.joinDate}
                                </span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="d-flex flex-column gap-3">
                                <button
                                    className="btn bg-red text-white px-4 py-3 rounded fw-semibold"
                                    onClick={() => HandleConatctProvider()}
                                >
                                    Contact Provider
                                </button>
                                {provider.portfolio && (
                                    <Link
                                        href={provider.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-danger  px-4 py-3 rounded fw-semibold text-center text-white"
                                    >
                                        View Portfolio
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-5">
                <div className="row g-4">
                    {/* Main Content */}
                    <div className="col-lg-8">
                        <div className="d-flex flex-column gap-4 ">
                            {/* Bio */}
                            <div className="bg-gray-800 rounded p-4 service-card">
                                <h2 className="h3 fw-bold mb-3 textDarkMode">
                                    About {provider.name}
                                </h2>
                                <p className="text-gra lh-lg">{provider.bio}</p>
                            </div>

                            {/* Skills */}
                            <div className="bg-gray-800 rounded p-4  service-card">
                                <h2 className="h3 fw-bold mb-3 textDarkMode">
                                    Skills & Technologies
                                </h2>
                                <div className="d-flex flex-wrap gap-2">
                                    {provider.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="skill-tag text-white px-3 py-2 rounded-pill fw-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            {provider.certifications &&
                                provider.certifications.length > 0 && (
                                    <div className="bg-gray-800 rounded p-4  service-card">
                                        <h2 className="h3 fw-bold mb-3 textDarkMode">
                                            Certifications
                                        </h2>
                                        <div className="d-flex flex-column gap-3">
                                            {provider.certifications.map(
                                                (cert, index) => (
                                                    <div
                                                        key={index}
                                                        className="d-flex align-items-center"
                                                    >
                                                        <svg
                                                            className="text-warning me-3"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="text-gra">
                                                            {cert}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                            {/* Project Photos */}
                            {provider.projectPhotos &&
                                provider.projectPhotos.length > 0 && (
                                    <div className="bg-gray-800 rounded p-4  service-card">
                                        <h2 className="h3 fw-bold mb-3 textDarkMode">
                                            Project Gallery
                                        </h2>
                                        <div className="project-gallery row g-3">
                                            {provider.projectPhotos.map(
                                                (photo, index) => (
                                                    <div
                                                        key={index}
                                                        className="col-6 col-md-4"
                                                    >
                                                        <div
                                                            className="position-relative"
                                                            style={{
                                                                aspectRatio:
                                                                    "1",
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo}
                                                                alt={`Project ${
                                                                    index + 1
                                                                }`}
                                                                fill
                                                                className="rounded object-fit-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="d-flex flex-column gap-4">
                            {/* Rating Summary */}
                            <div className="bg-gray-800 rounded p-4 service-card">
                                <h3 className="h5 fw-bold mb-3 textDarkMode">
                                    Rating Summary
                                </h3>
                                <div className="text-center">
                                    <div className="display-4 fw-bold text-warning mb-2">
                                        {providerData.rating}
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        {renderStars(providerData.rating)}
                                    </div>
                                    <p className="text-gra">
                                        {providerData.totalReviews} reviews
                                    </p>
                                </div>
                            </div>

                            {/* Recent Reviews */}
                            <div className="bg-gray-800 rounded p-4  service-card">
                                <h3 className="h5 fw-bold mb-3 textDarkMode">
                                    Recent Reviews
                                </h3>
                                <div className="d-flex flex-column gap-3 ">
                                    {providerData.feedback
                                        .slice(0, 3)
                                        .map((review, index) => (
                                            <div
                                                key={index}
                                                className="review-card border-bottom border-secondary pb-3 p-3 rounded  service-card"
                                            >
                                                <div className="d-flex align-items-center mb-2">
                                                    <div className="star-rating me-2">
                                                        {renderStars(
                                                            review.rating
                                                        )}
                                                    </div>
                                                    <span className="small text-gra">
                                                        {review.date}
                                                    </span>
                                                </div>
                                                <p className="text-gra small mb-1">
                                                    {review.comment}
                                                </p>
                                                <p className="text-secondary small">
                                                    - {review.clientName}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Add Your Review */}
                            <Review
                                providerData={providerData}
                                setProviderData={setProviderData}
                            />

                            {/* Contact Info */}
                            <div className="bg-gray-800 rounded p-4">
                                <h3 className="h5 fw-bold mb-3">
                                    Get in Touch
                                </h3>
                                <div className="d-flex flex-column gap-3">
                                    <button className="btn bg-red text-white py-3 rounded fw-semibold">
                                        Send Message
                                    </button>
                                    <button className="btn btn-outline-secondary text-gra py-3 rounded fw-semibold">
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Request Service Modal */}
            <RequestServiceModal
                show={showRequestModal}
                onHide={() => setShowRequestModal(false)}
                provider={provider}
            />
        </div>
      </>
    );
};

export default ProviderProfile;
