import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginSignup from './pages/loginSignup/LoginSignup';
import Data from './pages/Data/Data';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/login' element={<LoginSignup />} />
        <Route  path='/detail' element={<Data/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
