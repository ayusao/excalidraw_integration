import React from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import { useNavigate } from "react-router-dom"; 

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
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.Item onSelect={handleLogout}>
            Logout
            </MainMenu.Item>
        </MainMenu>
      </Excalidraw>
    </div>

  );
}
export default CanvasPage;
