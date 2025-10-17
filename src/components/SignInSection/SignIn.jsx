// src/pages/Signin.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignIn.css";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError("");
    try {
      const response = await fetch("https://bestwishes.ng/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("token", result.token);
        login(result.user); // AuthContext handles redirect
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleGoogleSignup = () => navigate("/dashboard");
  const handleFacebookSignup = () => navigate("/dashboard");

  return (
    <section className="sign-in">
      <div className="login-container">
        <div className="login-card">
          <div className="logo">
            <img src="/bwlogo.png" alt="logo" />
          </div>

          <h1 className="title-login">Welcome Back</h1>
          <p className="subtitle">
            Login and let's help you spread a little joy today.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <div className="input-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={errors.email ? "error" : ""}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <div className="input-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
                    <circle cx="12" cy="16" r="1" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={errors.password ? "error" : ""}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="submit-btn">
              Sign In
            </button>

            <p>
              Don't have an account?{" "}
              <a href="/signup" className="login-btn">
                Click here
              </a>
            </p>
            <br />
            <p>
              <a href="/signup" className="login-btn">
                Forgot Password?
              </a>
            </p>
          </form>

          <div className="divider">
            <span>Or sign in with</span>
          </div>

          <div className="social-buttons">
            <button
              type="button"
              className="social-btn google-btn"
              onClick={handleGoogleSignup}
            >
              Google Sign In
            </button>

            <button
              type="button"
              className="social-btn facebook-btn"
              onClick={handleFacebookSignup}
            >
              Facebook Sign In
            </button>
          </div>
        </div>

        <img src="/auth-image.png" alt="signup" className="auth-image" />
      </div>
    </section>
  );
};

export default Signin;
