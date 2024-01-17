import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./R3F/Experience/Experience";
import HeaderImage from "./R3F/HeaderImage";
import Lighting from "./R3F/Lighting";
import { OrbitControls } from "@react-three/drei";

console.log("built by brian kim");

function App() {
  return (
    <Fragment>
      <HeaderImage />
      <Canvas orthographic camera={{ zoom: 80 }} dpr={[1, 1.5]} shadows>
        {/* <OrbitControls /> */}

        <color attach={"background"} args={["#ffffff"]} />
        <Experience />
      </Canvas>
    </Fragment>
  );
}

export default App;
