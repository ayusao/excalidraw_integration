import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginpage';
import CanvasPage from './components/canvaspage';


function App() {
  return (
    <>
      
        {/* <LoginPage/> */}
        {/* <CanvasPage/> */}
        <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/canvas" element={<CanvasPage />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
