import './App.css'
import { useState, useEffect} from 'react';
import {LandingPage} from "./components/LandingPage.tsx"

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
    <LandingPage screenWidth={screenWidth}></LandingPage>
  </>
}






export default App
