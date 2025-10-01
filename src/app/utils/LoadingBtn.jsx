"use client";

import { useState } from "react";
import { useAuth } from "@/app/Context/AuthContext";

export default function LoginButton({ loginFunc, form }) {
    const [loading, setLoading] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await loginFunc(form.email, form.password); // العملية الفعلية
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="submit"
            className="btn bg-main w-100 text-white py-3 d-flex justify-content-center align-items-center"
            onClick={handleClick}
            disabled={loading}
        >
            {loading && (
                <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                ></span>
            )}
            {loading ? "Logging in..." : "Login"}
        </button>
    );
}
