// src/components/signuppage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

function SignUpPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSigningUp(true);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setIsSigningUp(false);
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      navigate("/canvas"); // After successful signup, go to canvas
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(error.message);
    }

    setIsSigningUp(false);
  };

  return (
    <>
      <div className="login-heading">DrawMate</div>
      <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
          {errorMessage && (
            <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>
          )}
          <button type="submit" disabled={isSigningUp}>
            {isSigningUp ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p style={{ marginTop: "10px" , textAlign: 'center'}}>
          Already have an account?{" "}
          <span 
            style={{ color: "#007bff", cursor: "pointer" }} 
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </>
  );
}

export default SignUpPage;
