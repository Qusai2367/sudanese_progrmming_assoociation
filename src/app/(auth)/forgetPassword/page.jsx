"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Your email !;");
      return;
    }
    setError("");
    console.log("Check Your Email We Send Code", email);
  };

  return (
    <main  className="container py-5 border border-0" style={{ maxWidth: 400 }}>
      <h2 className="text-center mb-4">Forget Password</h2>

      <form
        className="card p-4 shadow text-light  bg-gradient-password"
        style={{ backgroundColor: "#1e2939", border: "1px solid #33373dff" }}
        onSubmit={onSubmit}
      >
        <div className="mb-3  d-flex justify-content-between flex-column">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="px-3 border border-0 p-3 rounded-3 outline-none bg-dark text-gra  place"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <small className="text-danger">{error}</small>}
        </div>

        <button type="submit" className="btn bg-main text-white w-100">
          Send
        </button>
      </form>
    </main>
  );
}