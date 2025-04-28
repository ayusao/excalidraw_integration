import './App.css';
import { Excalidraw } from "@excalidraw/excalidraw";
import LoginPage from './components/loginpage';
import CanvasPage from './components/canvaspage';


function App() {
  return (
    <>
      <div>
        {/* <LoginPage/> */}
        <CanvasPage/>
      </div>
    </>
  );
}

export default App;
