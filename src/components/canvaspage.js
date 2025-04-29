import React, { useState, useEffect } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useNavigate } from "react-router-dom"; 
import { FaSignOutAlt } from "react-icons/fa"; 
import "./components.css";
import { useAuth } from "../firebase/authContext";

function CanvasPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();  // use logout from context
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        cancelLogout();  // Close modal if Escape is pressed
      }
    };

    if (showLogoutConfirm) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLogoutConfirm]);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    try {
      await logout();    // THIS is important - actually sign out from Firebase
      console.log("Logged out");
      navigate("/");      // Then redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };


  return (
    <div style={{ height: "90vh", position: "relative" }}>
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

        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint>
            <p>Toolbar Hints!</p>
          </WelcomeScreen.Hints.ToolbarHint>
          <WelcomeScreen.Hints.HelpHint />

          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Heading>
              <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Start drawing!</span>
              <p>Draw your heart out.</p>
            </WelcomeScreen.Center.Heading>
          </WelcomeScreen.Center>

        </WelcomeScreen>
      </Excalidraw>

      {showLogoutConfirm && (
        <div className="logout-modal-background">
          <div className="logout-modal">
            <h2>DrawMate</h2>
            <p>Are you sure you want to logout?</p>
            <div className="logout-buttons">
              <button onClick={confirmLogout} className="logout-button">
                Logout
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
