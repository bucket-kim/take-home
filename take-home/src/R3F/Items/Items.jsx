import { Box, Scroll, useIntersect } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { Fragment, memo } from "react";
import * as THREE from "three";

const Items = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[0, -h / 4, 0]}
        scale={[1, 1, 1]}
      />
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[0, -h, 0]}
        scale={[1, 1, 1]}
      />
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[w / 6, -h * 2, 0]}
        scale={[1, 1, 1]}
      />
    </Scroll>
  );
};

export default memo(Items);
