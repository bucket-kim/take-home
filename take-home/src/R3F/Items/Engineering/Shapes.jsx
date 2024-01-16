import { Box, Sphere } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Shapes = (props) => {
  return (
    <group {...props}>
      <Sphere material={new THREE.MeshStandardMaterial()} castShadow />
    </group>
  );
};

export default Shapes;
