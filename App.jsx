import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import Marquees from './components/Marquees';
import About from './components/About';
import Foot from './components/Foot';
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseSize, setMouseSize] = useState(8); // default mouse size



  
  useEffect(() => {


  

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setMouseSize(14); // Increase size when mouse is moving
    };

    const handleMouseLeave = () => {
      setMouseSize(0); // Reset to default size when mouse leaves
    };

    // Add event listeners for mouse move and mouse leave
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-black text-white w-full pb-5">
      <div
        className="fixed hidden md:flex rounded-full mix-blend-difference bg-white"
        style={{
          top: `${mousePosition.y - mouseSize / 2}px`, // Center the circle on the mouse
          left: `${mousePosition.x - mouseSize / 2}px`,
          height: `${mouseSize}px`,
          width: `${mouseSize}px`,
          pointerEvents: "none",
          zIndex: 10
        }}
      ></div>
      <Navbar />
      <Home/>
      <Cards/>
      <Marquees className='border-t-px border-white' />
      <About/>
      <Foot/>
    </div>
  );
}

export default App;
