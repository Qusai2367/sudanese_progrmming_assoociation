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
    <h1 className="text-center mb-4 textDarkMode " style={{fontSize:"40px", fontWeight:"bolder"}}>For Get Password</h1>

      <form
        className="card p-4  service-card-2  text-light  bg-gradient-password"
        style={{ backgroundColor: "#1e2939" }}
        onSubmit={onSubmit}
      >
        <div className="mb-3  d-flex justify-content-between flex-column">
          <label className="form-label textDarkMode">Email</label>
          <input
            type="email"
            className="px-3 border border-0 p-3 rounded-3 input-style-2 outline-none bg-dark text-gra  place"
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