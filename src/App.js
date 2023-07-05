import React, { useEffect, useState } from 'react';
import { AllRoutes } from './AllRoutes';
import './App.css';
import './home.css'
import { Navbar } from './Components/HomeComponents/Navbar/Navbar';

function App() {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    function updateScrollDistance() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);
      setScrollDistance(pre=>scrollPercentage);
    }

    window.addEventListener('scroll', updateScrollDistance);

    return () => {
      window.removeEventListener('scroll', updateScrollDistance);
    };
  }, []);

  return (
    <div className="App">
      <Navbar scrollDistance={scrollDistance} />
      <AllRoutes />
    </div>
  );
}

export default App;
