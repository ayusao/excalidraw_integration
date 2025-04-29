import React, { useState, useEffect } from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import { useNavigate } from "react-router-dom"; 
import { FaSignOutAlt } from "react-icons/fa"; 
import "./canvaspage.css";

function CanvasPage() {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        cancelLogout();  // Close modal if Escape is pressed
      }
    };

    // Add event listener when modal is shown
    if (showLogoutConfirm) {
      document.addEventListener("keydown", handleEscape);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLogoutConfirm]);
  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    console.log("Logging out...");
    navigate("/"); // Redirects to login page
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Excalidraw>
        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.Item onSelect={handleLogoutClick}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <FaSignOutAlt style={{ marginRight: "8px" }} />
              <span>Logout</span>
            </div>
          </MainMenu.Item>
        </MainMenu>
      </Excalidraw>

      {showLogoutConfirm && (
        <div className="logout-modal-background">
          <div className="logout-modal">
            <h2>DrawMate</h2>
            <p>Are you sure you want to logout?</p>
            <div className="logout-buttons">
              <button onClick={confirmLogout} className="logout-button">
                Yes, Logout
              </button>
              <button onClick={cancelLogout} className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CanvasPage;
