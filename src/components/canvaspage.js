import React from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import { useNavigate } from "react-router-dom"; 
import { FaSignOutAlt } from "react-icons/fa";  // Import the icon

// function CanvasPage() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <Excalidraw>
//         {/* <MainMenu.DefaultItems.ToggleTheme/> */}
//       </Excalidraw> 
//     </div>
//   );
// }
function CanvasPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/"); // Redirects to login page
  };
  return (

    <div style={{ height: "100vh" }}>
      <Excalidraw>
        <MainMenu>
            {/* <MainMenu.DefaultItems.Socials /> */}
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.Item onSelect={handleLogout}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <FaSignOutAlt style={{ marginRight: "8px" }} />
                <span>Logout</span>
              </div>
            </MainMenu.Item>
        </MainMenu>
      </Excalidraw>
    </div>

  );
}
export default CanvasPage;
