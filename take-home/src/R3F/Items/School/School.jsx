import { Plane, useTexture } from "@react-three/drei";
import React, { useMemo } from "react";
import * as THREE from "three";
import Lens from "./SchoolElement";
import SchoolElement from "./SchoolElement";

const School = (props) => {
  const svaMap = useTexture("/textures/SVA.png");
  svaMap.colorSpace = THREE.SRGBColorSpace;

  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({ map: svaMap, toneMapped: false });
  }, []);

  return (
    <group {...props}>
      <Plane material={material} scale={5} position={[0, 2, 0]} />
      <SchoolElement position={[0, -3, 0]} scale={1.2} />
    </group>
  );
};

export default School;
