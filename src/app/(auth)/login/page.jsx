"use client";

import Loader from "@/app/components/Loader";
import { useAuth } from "@/app/Context/AuthContext";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

    const {login} =  useAuth();
    console.log(login)
    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!form.email) newErrors.email = "Email is required!";
        if (!form.password) newErrors.password = "Password is required!";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        console.log("Login:", form);

        login(form.email , form.password)
    };

    return (

        <>
               <Loader delay={2000} />
               <main
        
        className="container  py-5 "
        style={{ maxWidth: 600, maxHeight: "100%" }}
    >
        <h1 className="text-center mb-4 gradient-text " style={{fontSize:"60px", fontWeight:"bolder"}}>Login</h1>

        <form
            className="bg-gradient card p-4 border border-0 shadow text-light"
            onSubmit={onSubmit}
        >
           <div className="mb-3 d-flex justify-content-between flex-column">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="px-3 border border-0 p-3 rounded-3 input-style-2 outline-none bg-dark text-gra  place"
                    placeholder="Enter your Email "
                    value={form.email}
                    onChange={onChange}
                />
                {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                )}
            </div>

            <div className="mb-3 d-flex justify-content-between flex-column">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="px-3 border border-0 p-3 input-style-2  rounded-3 outline-none bg-dark text-gra  place"
                    placeholder="Enter your Password"
                    value={form.password}
                    onChange={onChange}
                />
                {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                )}
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="remember"
                        className="form-check-input"
                        id="rememberMe"
                        checked={form.remember}
                        onChange={onChange}
                    />
                    <label
                        htmlFor="rememberMe"
                        className="form-check-label"
                    >
                        Remember me
                    </label>
                </div>

                <Link href="/forgetPassword" className="text-info text-decoration-none    ">
                    Forgot Password?
                </Link>
            </div>

            <button type="submit" className="btn bg-main w-100 text-white py-3">
                Login
            </button>

            <div className="text-center mt-3 textDarkMode">
                <span>Don't have an account? </span>
                <Link href="/register" className="text-info text-decoration-none">
                    Create an account
                </Link>
            </div>
        </form>
    </main>
        </>
       
    );
}