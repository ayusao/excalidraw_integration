import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../firebase/authContext";
import { FaGoogle } from "react-icons/fa"; 

function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();
  const { user } = useAuth(); // access user info
  
  // redirects logged-in users to the page
  useEffect(() => {
    if (user) {
      navigate("/canvas");
    }
  }, [user, navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    setErrorMessage("");

    try {
      await doSignInWithEmailAndPassword(email, password);
      navigate("/canvas"); // redirect after successful login
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.message);
    }
    setIsSigningIn(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      navigate("/canvas");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setErrorMessage(error.message);
    }
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
          <button type="submit" disabled={isSigningIn}>
            {isSigningIn ? "Signing In..." : "Login"}
          </button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={handleGoogleSignIn} 
            disabled={isSigningIn} 
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 15px",
              backgroundColor: "#4285F4", // Google blue color
              color: "white",
              border: "none",
              borderRadius: "4px",
              width: "100%",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            <FaGoogle style={{ marginRight: "10px" }} /> 
            {isSigningIn ? "Signing In..." : "Login with Google"}
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
