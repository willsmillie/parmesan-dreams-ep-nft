import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";

export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 350.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          highlightColor: 0xc3bdb0,
          midtoneColor: 0xdc6ac6,
          lowlightColor: 0xc300ff,
          baseColor: 0x7775b1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={vantaRef} style={{ height: "100%", width: "100%" }}></div>;
};

export default MyComponent;
