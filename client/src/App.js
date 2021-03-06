import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginSignup from './pages/loginSignup/LoginSignup';
import Data from './pages/Data/Data';
import LinkTree1 from './pages/linkTrr1/linkTree1';
import LinkTrr2 from './pages/linkTrr2/LinkTrr2';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route  path='/login' element={<LoginSignup />} />
        <Route  path='/detail' element={<Data/>} />
        <Route path='/linktree' element={<LinkTree1/>} />
        <Route path='/linktree2' element={<LinkTrr2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
