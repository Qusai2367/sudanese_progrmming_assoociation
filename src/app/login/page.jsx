"use client";

import Link from "next/link";
import { useState } from "react";

export default function LogIn() {
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

    if (!form.email) newErrors.email = "البريد الإلكتروني مطلوب!";
    if (!form.password) newErrors.password = "كلمة المرور مطلوبة!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("تم تسجيل الدخول:", form);
  };

  return (
    <main dir="rtl" className="container py-5" style={{ maxWidth: 400 }}>
      <h2 className="text-center mb-4">تسجيل الدخول</h2>

      <form
        className="card p-4 shadow text-light"
        style={{ backgroundColor: "#1e2939", border: "1px solid #131d2cff" }}
        onSubmit={onSubmit}
      >
        <div className="mb-3">
          <label className="form-label">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            className="form-control bg-dark text-light border-secondary"
            placeholder="أدخل بريدك الإلكتروني"
            value={form.email}
            onChange={onChange}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">كلمة المرور</label>
          <input
            type="password"
            name="password"
            className="form-control bg-dark text-light border-secondary"
            placeholder="أدخل كلمة المرور"
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
            <label htmlFor="rememberMe" className="form-check-label">
              تذكرني
            </label>
          </div>

          <Link href="/forgotPassword" className="text-info">
            نسيت كلمة المرور؟
          </Link>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          تسجيل الدخول
        </button>

        <div className="text-center mt-3">
          <span>ليس لدي حساب؟ </span>
          <Link href="/register" className="text-info">
            انشاء حساب
          </Link>
        </div>
      </form>
    </main>
  );
}
