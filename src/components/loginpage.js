import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../firebase/authContext";
import { FaGoogle } from "react-icons/fa"; 
import './components.css';

function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [isEmailSigningIn, setIsEmailSigningIn] = useState(false);
  const [isGoogleSigningIn, setIsGoogleSigningIn] = useState(false);  
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();
  const { user } = useAuth(); // access user info
  
  useEffect(() => {
    if (user) {
      navigate("/canvas");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsEmailSigningIn(true);
    setErrorMessage("");

    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/canvas");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.message);
    }
    setIsEmailSigningIn(false);
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleSigningIn(true);
    setErrorMessage("");

    try {
      await doSignInWithGoogle();
      navigate("/canvas");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setErrorMessage(error.message);
    }
    setIsGoogleSigningIn(false);
  };

  return (
    <>
      <div className="login-heading">DrawMate</div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
      placeholder="Enter your password"
      required
    />
  </div>
  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

  <div className="button-wrapper">
    <button type="submit" disabled={isEmailSigningIn}>
      {isEmailSigningIn ? "Signing In..." : "Login"}
    </button>
  </div>

  <div className="button-wrapper">
    <button 
      onClick={handleGoogleSignIn} 
      disabled={isGoogleSigningIn} 
      className="google-login-btn"
    >
      <FaGoogle style={{ marginRight: "10px" }} /> 
      {isGoogleSigningIn ? "Signing In..." : "Login with Google"}
    </button>
  </div>
</form>

        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            <u>Sign up</u>
          </span>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
