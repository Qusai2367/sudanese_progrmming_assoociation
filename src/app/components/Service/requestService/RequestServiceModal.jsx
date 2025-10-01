"use client";
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Alert } from "react-bootstrap";
import { serviceQuestions } from "@/app/data/ServiceQuestions";

const RequestServiceModal = ({ show, onHide, provider }) => {
    const [formData, setFormData] = useState({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        answers: {},
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    
    // Get dynamic questions based on service type
    const dynamicQuestions = provider?.serviceType ? serviceQuestions[provider.serviceType] || [] : [];
    const hasSpecificQuestions = dynamicQuestions.length > 0;
    const totalSteps = hasSpecificQuestions ? 3 : 2;

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }));
        }
    };

    const handleQuestionAnswer = (questionName, answer) => {
        setFormData((prev) => ({
            ...prev,
            answers: {
                ...prev.answers,
                [questionName]: answer,
            },
        }));
        // Clear error when user starts typing
        const questionIndex = dynamicQuestions.findIndex(q => q.name === questionName);
        if (questionIndex !== -1 && errors[`question_${questionIndex}`]) {
            setErrors((prev) => ({
                ...prev,
                [`question_${questionIndex}`]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.clientName.trim())
            newErrors.clientName = "Name is required";
        if (!formData.clientEmail.trim())
            newErrors.clientEmail = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.clientEmail))
            newErrors.clientEmail = "Email is invalid";
        if (!formData.clientPhone.trim())
            newErrors.clientPhone = "Phone number is required";
        if (!formData.projectDescription.trim())
            newErrors.projectDescription = "Project description is required";
        if (!formData.budget.trim()) newErrors.budget = "Budget is required";
        if (!formData.timeline.trim())
            newErrors.timeline = "Timeline is required";

        // Validate dynamic questions
        if (dynamicQuestions.length > 0) {
            dynamicQuestions.forEach((question, index) => {
                if (question.required && !formData.answers[question.name]) {
                    newErrors[`question_${index}`] = `${question.label} is required`;
                }
            });
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            // Validate basic information
            if (!formData.clientName.trim())
                newErrors.clientName = "Name is required";
            if (!formData.clientEmail.trim())
                newErrors.clientEmail = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(formData.clientEmail))
                newErrors.clientEmail = "Email is invalid";
            if (!formData.clientPhone.trim())
                newErrors.clientPhone = "Phone number is required";
            if (!formData.budget.trim()) newErrors.budget = "Budget is required";
        } else if (step === 2) {
            // Validate project details
            if (!formData.projectDescription.trim())
                newErrors.projectDescription = "Project description is required";
            if (!formData.timeline.trim())
                newErrors.timeline = "Timeline is required";
        } else if (step === 3 && dynamicQuestions.length > 0) {
            // Validate dynamic questions
            dynamicQuestions.forEach((question, index) => {
                if (question.required && !formData.answers[question.name]) {
                    newErrors[`question_${index}`] = `${question.label} is required`;
                }
            });
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            console.log("Service Request Data:", {
                providerId: provider.id,
                providerName: provider.name,
                ...formData,
            });
            setSubmitSuccess(true);
            setTimeout(() => {
                setFormData({
                    clientName: "",
                    clientEmail: "",
                    clientPhone: "",
                    projectDescription: "",
                    budget: "",
                    timeline: "",
                    answers: {},
                });
                setSubmitSuccess(false);
                setCurrentStep(1);
                onHide();
            }, 100000);
            
        } catch (error) {
            console.error("Error submitting service request:", error);
            setErrors({
                submit: "Failed to submit request. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            clientName: "",
            clientEmail: "",
            clientPhone: "",
            projectDescription: "",
            budget: "",
            timeline: "",
            answers: {},
        });
        setErrors({});
        setSubmitSuccess(false);
    };

    const handleClose = () => {
        resetForm();
        onHide();
    };

    if (!provider) return null;

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered >
            <Modal.Header closeButton className="bg-gray-800 text-white service-card-3">
                <Modal.Title className="textDarkMode">Request Service from {provider.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-gray-800 text-white service-card-2">
                {submitSuccess ? (
                    <div className="text-center py-4">
                        <Alert
                            variant="success"
                            className="bg-success text-white border-success"
                        >
                            <h4>Request Submitted Successfully!</h4>
                            <p className="mb-0">
                                Your service request has been sent to{" "}
                                {provider.name}. They will contact you within 24
                                hours.
                            </p>
                        </Alert>
                    </div>
                ) : (
                    <Form onSubmit={handleSubmit}>
                        {/* Step Progress */}
                        <div className="mb-4">
                            <div
                                className="progress bg-gray-900"
                                style={{ height: 8 }}
                            >
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{
                                        width: `${Math.round(
                                            (currentStep / totalSteps) * 100
                                        )}%`,
                                        transition: "width 300ms ease",
                                    }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>
                            <div className="d-flex justify-content-between mt-2 small text-gray-400">
                                <span className="textDarkMode">
                                    Step {currentStep} of {totalSteps}
                                </span>
                                <span>
                                    {Math.round(
                                        (currentStep / totalSteps) * 100
                                    )}
                                    %
                                </span>
                            </div>
                        </div>

                        {/* Step Indicators */}
                        <div className="mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                {/* Step 1 */}
                                <div className="d-flex align-items-center">
                                    <div
                                        className={`rounded-circle d-flex align-items-center justify-content-center ${
                                            currentStep >= 1
                                                ? "bg-danger text-white"
                                                : "bg-gray-600 text-gray-400"
                                        }`}
                                        style={{ width: 30, height: 30, fontSize: 14 }}
                                    >
                                        {currentStep > 1 ? "✓" : "1"}
                                    </div>
                                    <span className={`ms-2 small ${currentStep >= 1 ? "text-white textDarkMode" : "text-gray-400"}`}>
                                        Personal Info
                                    </span>
                                </div>

                                {/* Connector */}
                                <div
                                    className={`mx-3 ${
                                        currentStep > 1 ? "bg-danger" : "bg-gray-600"
                                    }`}
                                    style={{ height: 2, width: 40 }}
                                />

                                {/* Step 2 */}
                                <div className="d-flex align-items-center">
                                    <div
                                        className={`rounded-circle d-flex align-items-center justify-content-center ${
                                            currentStep >= 2
                                                ? "bg-danger text-white "
                                                : "bg-gray-600 text-gray-400 textDarkMode"
                                        }`}
                                        style={{ width: 30, height: 30, fontSize: 14 }}
                                    >
                                        {currentStep > 2 ? "✓" : "2"}
                                    </div>
                                    <span className={`ms-2 small ${currentStep >= 2 ? "text-white " : "text-gray-400 textDarkMode"}`}>
                                        Project Details
                                    </span>
                                </div>

                                {/* Connector for Step 3 (only if there are specific questions) */}
                                {hasSpecificQuestions && (
                                    <>
                                        <div
                                            className={`mx-3 ${
                                                currentStep > 2 ? "bg-danger" : "bg-gray-600"
                                            }`}
                                            style={{ height: 2, width: 40 }}
                                        />

                                        {/* Step 3 */}
                                        <div className="d-flex align-items-center">
                                            <div
                                                className={`rounded-circle d-flex align-items-center justify-content-center ${
                                                    currentStep >= 3
                                                        ? "bg-danger text-white"
                                                        : "bg-gray-600 text-gray-400 textDarkMode"
                                                }`}
                                                style={{ width: 30, height: 30, fontSize: 14 }}
                                            >
                                                {currentStep > 3 ? "✓" : "3"}
                                            </div>
                                            <span className={`ms-2 small ${currentStep >= 3 ? "text-white " : "text-gray-400 textDarkMode"}`}>
                                                Questions
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Step Titles */}
                        <div className="mb-4 text-center">
                            {currentStep === 1 && (
                                <div>
                                    <h4 className="text-white mb-2 textDarkMode">Personal Information</h4>
                                    <p className="text-gray-400 small textDarkMode">Tell us about yourself and your budget</p>
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div>
                                    <h4 className="text-white mb-2">Project Details</h4>
                                    <p className="text-gray-400 small">Describe your project requirements and timeline</p>
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div>
                                    <h4 className="text-white mb-2">Additional Information</h4>
                                    <p className="text-gray-400 small">Answer some specific questions about your project</p>
                                </div>
                            )}
                        </div>

                        {/* Provider Info */}
                        <div className="mb-4 p-3 text-white bg-gray-900 rounded sp-card">
                            <h5 className="text-main mb-2">
                                {provider.serviceType}
                            </h5>
                            <p className=" mb-2">{provider.hourlyRate}</p>
                            <p className="small ">{provider.bio}</p>
                        </div>

                        {/* Step 1: Client Information */}
                        {currentStep === 1 && (
                            <div>
                                <h5 className="text-white mb-3 textDarkMode">Your Information</h5>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-white textDarkMode">
                                                Full Name *
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={formData.clientName}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "clientName",
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600 input-style-2"
                                                placeholder="Enter your full name"
                                                isInvalid={!!errors.clientName}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.clientName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-white textDarkMode">
                                                Email Address *
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={formData.clientEmail}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "clientEmail",
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600 input-style-2"
                                                placeholder="Enter your email"
                                                isInvalid={!!errors.clientEmail}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.clientEmail}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-white textDarkMode">
                                                Phone Number *
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                value={formData.clientPhone}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "clientPhone",
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white input-style-2 border-gray-600"
                                                placeholder="Enter your phone number"
                                                isInvalid={!!errors.clientPhone}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.clientPhone}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-white textDarkMode">
                                                Budget *
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={formData.budget}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "budget",
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600 input-style-2"
                                                placeholder="e.g., $500 - $1000"
                                                isInvalid={!!errors.budget}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.budget}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        )}

                        {/* Step 2: Project Details */}
                        {currentStep === 2 && (
                            <div>
                                <h5 className="text-white mb-3 textDarkMode">Project Details</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white textDarkMode">
                                        Project Description *
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        value={formData.projectDescription}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "projectDescription",
                                                e.target.value
                                            )
                                        }
                                        className="bg-gray-700 text-white border-gray-600 input-style-2"
                                        placeholder="Describe your project requirements in detail"
                                        isInvalid={!!errors.projectDescription}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.projectDescription}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white textDarkMode">
                                        Timeline *
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.timeline}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "timeline",
                                                e.target.value
                                            )
                                        }
                                        className="bg-gray-700 text-white input-style-2 border-gray-600"
                                        placeholder="e.g., 2 weeks, 1 month"
                                        isInvalid={!!errors.timeline}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.timeline}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        )}

                        {/* Step 3: Dynamic Questions */}
                        {currentStep === 3 && dynamicQuestions.length > 0 && (
                            <div>
                                <h5 className="text-white mb-3 textDarkMode">
                                    Additional Questions
                                </h5>
                                {dynamicQuestions.map((question, index) => (
                                    <Form.Group key={index} className="mb-3">
                                        <Form.Label className="text-white textDarkMode">
                                            {question.label} {question.required && "*"}
                                        </Form.Label>
                                        
                                        {question.type === "select" ? (
                                            <Form.Select
                                                value={formData.answers[question.name] || ""}
                                                onChange={(e) =>
                                                    handleQuestionAnswer(
                                                        question.name,
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600 input-style-2"
                                                isInvalid={!!errors[`question_${index}`]}
                                            >
                                                <option value="" className="input-style-2" >Select an option</option>
                                                {question.options?.map((option, optIndex) => (
                                                    <option key={optIndex} className="input-style-2" value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        ) : question.type === "textarea" ? (
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={formData.answers[question.name] || ""}
                                                onChange={(e) =>
                                                    handleQuestionAnswer(
                                                        question.name,
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600 input-style-2"
                                                placeholder="Your answer"
                                                isInvalid={!!errors[`question_${index}`]}
                                            />
                                        ) : question.type === "date" ? (
                                            <Form.Control
                                                type="date"
                                                value={formData.answers[question.name] || ""}
                                                onChange={(e) =>
                                                    handleQuestionAnswer(
                                                        question.name,
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600 input-style-2"
                                                isInvalid={!!errors[`question_${index}`]}
                                            />
                                        ) : (
                                            <Form.Control
                                                type="text"
                                                value={formData.answers[question.name] || ""}
                                                onChange={(e) =>
                                                    handleQuestionAnswer(
                                                        question.name,
                                                        e.target.value
                                                    )
                                                }
                                                className="bg-gray-700 text-white border-gray-600"
                                                placeholder="Your answer"
                                                isInvalid={!!errors[`question_${index}`]}
                                            />
                                        )}
                                        
                                        <Form.Control.Feedback type="invalid">
                                            {errors[`question_${index}`]}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                ))}
                            </div>
                        )}

                        {/* Submit Error */}
                        {errors.submit && (
                            <Alert variant="danger" className="mb-3">
                                {errors.submit}
                            </Alert>
                        )}

                        {/* Navigation */}
                        <div className="d-flex justify-content-between border-none gap-2">
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    currentStep === 1
                                        ? handleClose()
                                        : setCurrentStep((s) =>
                                              Math.max(1, s - 1)
                                          )
                                }
                                disabled={isSubmitting}
                            >
                                {currentStep === 1 ? "Cancel" : "Back"}
                            </Button>
                            {(currentStep === 2 && !hasSpecificQuestions) ||
                            (currentStep === 3 && hasSpecificQuestions) ? (
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isSubmitting}
                                    className="bg-main hover-submit"
                                    style={{ border: "none" }}
                                >
                                    {isSubmitting
                                        ? "Submitting..."
                                        : "Submit Request"}
                                </Button>
                            ) : (
                                <Button
                                    variant="primary"
                                    className="bg-main hover-submit"
                                    style={{ border: "none" }}
                                    onClick={() => {
                                        if (!validateStep(currentStep)) return;
                                        setCurrentStep((s) => s + 1);
                                    }}
                                >
                                    Next
                                </Button>
                            )}
                        </div>
                    </Form>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default RequestServiceModal;

