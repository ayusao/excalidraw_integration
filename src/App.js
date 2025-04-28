import './App.css';
import { Excalidraw } from "@excalidraw/excalidraw";
import LoginPage from './components/loginpage';


function App() {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
      <div style={{ height: "500px" }}>
        <Excalidraw />
      </div> */}
      <div>
        <LoginPage/>
      </div>
    </>
  );
}

export default App;
