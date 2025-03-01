import './App.css'
import { useState, useEffect } from 'react';
import { LandingPage } from "./components/LandingPage.tsx"
import LoginPage from './components/LoginPage.tsx';
import SignUpPage from './components/SignUpPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage.tsx';
import { ProtectedRoutes } from './components/ProtectedRoute.tsx';
import { RecoilRoot } from 'recoil';

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage screenWidth={screenWidth} />}></Route>
          <Route path='/create-account' element={<SignUpPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='*' element={<div>Error:404 <br></br>Page Not Found</div>}></Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/dashboard' element={<MainPage screenWidth={screenWidth} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}


export default App
