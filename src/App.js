import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/loginpage';
import CanvasPage from './components/canvaspage';
import SignUpPage from './components/signuppage'
import PrivateRoute from './components/privateroute';
import { AuthProvider } from './firebase/authContext';
import Navbar from './components/navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* PROTECTED CANVAS PAGE */}
          <Route
            path="/canvas"
            element={
              <PrivateRoute>
                <CanvasPage />
              </PrivateRoute>
            }
          />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
