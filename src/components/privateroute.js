import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../firebase/authContext";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // You can return a loading spinner or placeholder here
    return <div>Loading...</div>;
  }

  if (!user) {
    // If not logged in, redirect to login
    return <Navigate to="/" />;
  }

  // If logged in, allow access to the page
  return children;
}

export default PrivateRoute;
