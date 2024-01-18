import React, { useEffect, useRef, useState } from "react";
import "./HeaderImage.css";
import gsap from "gsap";

const HeaderImage = () => {
  const pTagRef = useRef(null);

  const handlePoiterUp = () => {
    if (!pTagRef.current) return;
    gsap.to(pTagRef.current.style, {
      opacity: "1",
      duration: 0.25,
      overwrite: true,
    });
    gsap.to(pTagRef.current, {
      x: 60,
      duration: 0.25,
      overwrite: true,
    });
  };

  const handlePoiterOut = () => {
    if (!pTagRef.current) return;
    gsap.to(pTagRef.current.style, {
      opacity: "0",
      duration: 0.25,
      overwrite: true,
    });
    gsap.to(pTagRef.current, {
      x: 0,
      duration: 0.25,
      overwrite: true,
    });
  };

  useEffect(() => {
    if (!pTagRef.current) return;
    pTagRef.current.style.opacity = "0";
  }, []);

  return (
    <div className="header-logo">
      <img
        src="/Image/ViteLogo.png"
        alt=""
        className="header-logo"
        onPointerDown={handlePoiterUp}
        onPointerUp={handlePoiterOut}
        onPointerOver={handlePoiterUp}
        onPointerOut={handlePoiterOut}
      />
      <p ref={pTagRef}>Developed with Vite</p>
    </div>
  );
};

export default HeaderImage;
