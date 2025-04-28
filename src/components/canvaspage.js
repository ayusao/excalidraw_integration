import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
// import "@excalidraw/excalidraw/dist/excalidraw.min.css"; // make sure you have installed excalidraw

function CanvasPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Excalidraw />
    </div>
  );
}

export default CanvasPage;
