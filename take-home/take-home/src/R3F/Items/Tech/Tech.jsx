import React from "react";
import Google from "./Google";
import Wayfair from "./Wayfair";
import { Float } from "@react-three/drei";

const Tech = (props) => {
  return (
    <group {...props}>
      <Float>
        <Google rotation-y={Math.PI / -2} position={[5, 3, 0]} scale={2} />
      </Float>
      <Float>
        <Wayfair rotation-y={Math.PI / -2} position={[5, -2, 0]} scale={2} />
      </Float>
    </group>
  );
};

export default Tech;
