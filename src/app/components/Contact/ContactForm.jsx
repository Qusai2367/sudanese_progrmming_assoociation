"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    return (
        <div className="bg-gray-800 rounded-4 p-4 shadow-lg">
            <style>
                {`
                    .form-control-dark:focus {
                        background-color: #495057;
                        color: #fff;
                        
                    }
                    .form-control-dark::placeholder {
                        color: #adb5bd;
                    }
                `}
            </style>
            <h3 className="text-white fw-bold mb-4">Send us a message</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control form-control-dark form-control-lg border-0 bg-gray-700 text-white rounded-3"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ padding: "15px 20px" }}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control form-control-dark form-control-lg border-0 bg-gray-700 text-white rounded-3"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ padding: "15px 20px" }}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control form-control-dark form-control-lg border-0 bg-gray-700 text-white rounded-3"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ padding: "15px 20px" }}
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        className="form-control form-control-dark border-0 bg-gray-700 text-white rounded-3"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        required
                        style={{ padding: "15px 20px", resize: "none" }}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-lg w-100 text-white fw-semibold border-0 rounded-3"
                    style={{
                        backgroundColor: "#ea2a33",
                        padding: "15px 20px",
                        fontSize: "16px",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#d0252e")
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#ea2a33")
                    }
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
