import React from "react";
import { Twitter, Linkedin, Instagram } from "react-feather";

const SocialLinks = () => {
    return (
        <div>
            <h4 className="text-white fw-bold mb-4">Follow Us</h4>
            <div className="d-flex gap-3">
                <a href="#" className="text-decoration-none">
                    <div className="bg-gray-800 p-3 rounded-circle d-flex align-items-center justify-content-center">
                        <Twitter size={20} className="text-white" />
                    </div>
                </a>
                <a href="#" className="text-decoration-none">
                    <div className="bg-gray-800 p-3 rounded-circle d-flex align-items-center justify-content-center">
                        <Linkedin size={20} className="text-white" />
                    </div>
                </a>
                <a href="#" className="text-decoration-none">
                    <div className="bg-gray-800 p-3 rounded-circle d-flex align-items-center justify-content-center">
                        <Instagram size={20} className="text-white" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
