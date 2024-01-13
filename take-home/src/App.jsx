import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./R3F/Experience/Experience";

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <Experience />
    </Canvas>
  );
}

export default App;
