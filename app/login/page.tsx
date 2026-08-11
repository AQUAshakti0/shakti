"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string }>({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string; name?: string } = {};

    if (mode === "register" && !name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedSuccess(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fbf9f4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative"
      }}
    >
      {/* Ambient Decorative Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(11, 60, 38, 0.05)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(245, 158, 11, 0.08)",
          filter: "blur(70px)",
          pointerEvents: "none"
        }}
      />

      {/* Main Split Login Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          background: "#ffffff",
          borderRadius: "24px",
          boxShadow: "0 20px 60px rgba(11, 60, 38, 0.12)",
          border: "1px solid #e5dec9",
          position: "relative",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))"
        }}
      >
        {/* Close Button (X) */}
        <Link
          href="/"
          aria-label="Close"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#f4f0e6",
            color: "#0b3c26",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "16px",
            zIndex: 20,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "transform 0.2s ease, background 0.2s ease"
          }}
        >
          ✕
        </Link>

        {/* Left Column: Login / Register Form */}
        <div style={{ padding: "48px 40px" }}>
          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 900,
                color: "#0b3c26",
                margin: "0 0 6px 0",
                letterSpacing: "-0.5px",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {mode === "login" ? "LOGIN" : "REGISTER"}
            </h1>
            <p style={{ fontSize: "14px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
              {mode === "login"
                ? "You can access your account using your Aqua Shakti credentials."
                : "Create an account to access customized industrial solutions."}
            </p>
          </div>

          {submittedSuccess ? (
            <div
              style={{
                background: "#f0fdf4",
                border: "1.5px solid #86efac",
                borderRadius: "14px",
                padding: "24px",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#0b3c26",
                  color: "#f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  fontSize: "24px"
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0b3c26", margin: "0 0 8px 0" }}>
                {mode === "login" ? "Welcome Back!" : "Registration Successful!"}
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", margin: "0 0 20px 0" }}>
                {mode === "login"
                  ? `Successfully authenticated as ${email}`
                  : `Account created for ${name}. You may now log in.`}
              </p>
              <button
                onClick={() => {
                  setSubmittedSuccess(false);
                  if (mode === "register") setMode("login");
                }}
                style={{
                  background: "#0b3c26",
                  color: "#ffffff",
                  border: "none",
                  padding: "10px 24px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                Continue to Portal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name Field (Register Mode Only) */}
              {mode === "register" && (
                <div style={{ marginBottom: "20px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0b3c26",
                      marginBottom: "6px"
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Please enter your full name"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      border: errors.name ? "1.5px solid #dc2626" : "1.5px solid #cbd5e1",
                      fontSize: "14px",
                      outline: "none",
                      background: "#fafaf8",
                      boxSizing: "border-box"
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: "12px", color: "#dc2626", fontWeight: 600, display: "block", marginTop: "4px" }}>
                      {errors.name}
                    </span>
                  )}
                </div>
              )}

              {/* Email Address Field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0b3c26",
                    marginBottom: "6px"
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please enter your email address"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: errors.email ? "1.5px solid #dc2626" : "1.5px solid #cbd5e1",
                    fontSize: "14px",
                    outline: "none",
                    background: "#fafaf8",
                    boxSizing: "border-box"
                  }}
                />
                {errors.email && (
                  <span style={{ fontSize: "12px", color: "#dc2626", fontWeight: 600, display: "block", marginTop: "4px" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0b3c26",
                    marginBottom: "6px"
                  }}
                >
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Please enter your password"
                    style={{
                      width: "100%",
                      padding: "12px 42px 12px 16px",
                      borderRadius: "10px",
                      border: errors.password ? "1.5px solid #dc2626" : "1.5px solid #cbd5e1",
                      fontSize: "14px",
                      outline: "none",
                      background: "#fafaf8",
                      boxSizing: "border-box"
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#64748b",
                      padding: 0,
                      display: "flex",
                      alignItems: "center"
                    }}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span style={{ fontSize: "12px", color: "#dc2626", fontWeight: 600, display: "block", marginTop: "4px" }}>
                    {errors.password}
                  </span>
                )}
              </div>

              {/* Forgot Password Link */}
              {mode === "login" && (
                <div style={{ textAlign: "right", marginBottom: "24px" }}>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Password reset instructions have been sent to your email.");
                    }}
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0b3c26",
                      textDecoration: "none"
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Primary CTA Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #0b3c26 0%, #165e3d 100%)",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(11, 60, 38, 0.25)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease"
                }}
              >
                {mode === "login" ? "Login" : "Create Account"}
              </button>

              {/* Divider & Social Login */}
              <div style={{ margin: "24px 0 18px 0", textAlign: "center", position: "relative" }}>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    background: "#ffffff",
                    padding: "0 12px",
                    position: "relative",
                    zIndex: 1,
                    fontWeight: 600
                  }}
                >
                  Login with others
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#e2e8f0"
                  }}
                />
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={() => alert("Google OAuth Integration Ready")}
                style={{
                  width: "100%",
                  padding: "11px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  border: "1.5px solid #cbd5e1",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Login with Google
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Brand Banner & Register Prompt */}
        <div
          style={{
            background: "#fbf9f4",
            padding: "48px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderLeft: "1px solid #e5dec9",
            position: "relative"
          }}
        >
          {/* Inner Decorative Border Container */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              right: "20px",
              bottom: "20px",
              border: "1.5px solid #e5dec9",
              borderRadius: "20px",
              pointerEvents: "none"
            }}
          />

          {/* Top Brand Header */}
          <div style={{ textAlign: "center", width: "100%", zIndex: 2 }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#0b3c26",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto",
                boxShadow: "0 8px 20px rgba(11, 60, 38, 0.2)",
                padding: "8px"
              }}
            >
              <img
                src="/logo.png?v=2"
                alt="Aqua Shakti Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                fontSize: "12px",
                fontWeight: 800,
                color: "#f59e0b",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                marginBottom: "4px"
              }}
            >
              Welcome to
            </div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: 900,
                color: "#0b3c26",
                margin: "0 0 4px 0",
                fontFamily: "'Inter', sans-serif"
              }}
            >
              BHASKAR AQUASHAKTI
            </h2>
            <div style={{ fontSize: "12px", color: "#526058", fontWeight: 600 }}>
              Industrial Water Treatment &amp; Chemicals
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#f59e0b",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginTop: "6px"
              }}
            >
              Innovate &bull; Purify &bull; Excel
            </div>
          </div>

          {/* Middle Registration Box */}
          <div
            style={{
              width: "100%",
              maxWidth: "280px",
              background: "#ffffff",
              borderRadius: "16px",
              padding: "20px 24px",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(11, 60, 38, 0.08)",
              border: "1px solid #e5dec9",
              zIndex: 2,
              margin: "24px 0"
            }}
          >
            <div style={{ fontSize: "14px", color: "#475569", fontWeight: 600, marginBottom: "8px" }}>
              {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            </div>
            <button
              onClick={() => {
                setMode(mode === "login" ? "register" : "login");
                setErrors({});
                setSubmittedSuccess(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: "#f59e0b",
                fontSize: "16px",
                fontWeight: 800,
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline"
              }}
            >
              {mode === "login" ? "Register Now" : "Login Now"}
            </button>
          </div>

          {/* Bottom Certification Badge */}
          <div style={{ textAlign: "center", zIndex: 2 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f4f0e6",
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid #e5dec9"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b3c26" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#0b3c26" }}>
                ISO 9001:2015 Certified Enterprise
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
