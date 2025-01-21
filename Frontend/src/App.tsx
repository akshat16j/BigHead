import './App.css'
import { useState, useEffect} from 'react';
import {LandingPage} from "./components/LandingPage.tsx"
import LoginPage from './components/LoginPage.tsx';
import SignUpPage from './components/SignUpPage.tsx';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return <>
    <SignUpPage></SignUpPage>
  </>
}


export default App
