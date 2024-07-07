// src/components/VantaWaves.js
import React, { useEffect, useRef ,useState} from 'react';

const Vanta = () => {
  const vantaRef = useRef(null);
  const [vantaEffect,setVantaEffect] = useState(null);
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadVanta = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js');

        if (window.VANTA) {
          window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x697ac2
          });
          
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadVanta();
    

    
  }, []);

  return <div ref={vantaRef} style={{  position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }} />;
};

export default Vanta;
