"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("البريد الإلكتروني مطلوب!");
      return;
    }
    setError("");
    console.log("تم إرسال رابط استعادة كلمة المرور إلى:", email);
  };

  return (
    <main dir="rtl" className="container py-5" style={{ maxWidth: 400 }}>
      <h2 className="text-center mb-4">استعادة كلمة المرور</h2>

      <form
        className="card p-4 shadow text-light"
        style={{ backgroundColor: "#1e2939", border: "1px solid #33373dff" }}
        onSubmit={onSubmit}
      >
        <div className="mb-3">
          <label className="form-label">البريد الإلكتروني</label>
          <input
            type="email"
            className="form-control bg-dark text-light border-secondary"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <small className="text-danger">{error}</small>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          إرسال رابط الاستعادة
        </button>
      </form>
    </main>
  );
}
