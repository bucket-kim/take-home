import React from "react";
import Iphone_12_pro from "./Iphone_12_pro";
import { Float, Shape } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Shapes from "./Shapes";

const Engineering = (props) => {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <group {...props}>
      <Float floatIntensity={2}>
        <Iphone_12_pro
          scale={0.075}
          rotation={[0.25, -2.5, 0.25]}
          position={[w * -0.35, h * -0.25, 0]}
        />
      </Float>
      <Shapes
        scale={1.5}
        rotation={[0, -2.5, 0]}
        position={[w * -0.1, h * -0.15, 0]}
      />
    </group>
  );
};

export default Engineering;
