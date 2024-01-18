import { Plane, RoundedBox, useTexture } from "@react-three/drei";
import React, { useMemo } from "react";
import * as THREE from "three";

const GameImage = (props) => {
  const screenMap = useTexture("/textures/gameImage.png");
  // screenMap.flipY = false;
  screenMap.colorSpace = THREE.SRGBColorSpace;

  const planeMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: screenMap,
      transparent: true,
      toneMapped: false,
    });
  }, [screenMap]);

  return (
    <group {...props}>
      <RoundedBox args={[8, 8, 0.1]} radius={0.5} position={[0, 0, -0.1]}>
        <meshBasicMaterial />
      </RoundedBox>
      <Plane scale={8} material={planeMaterial} />
    </group>
  );
};

export default GameImage;
