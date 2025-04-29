// src/components/Navbar.js
import React from "react";
import { useAuth } from "../firebase/authContext"; 
import './navbarstyles.css'

const Navbar = () => {
  const { user } = useAuth();  

  return (
    <nav className="navbar">
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}
    >
      <h1>DrawMate</h1>
    </a>
    {user && (
      <div className="user-info">
        <h3>Welcome, {user.displayName || "user"}!</h3>
      </div>
    )}
  </nav>
  );
};

export default Navbar;
