import { Box, Scroll, useIntersect, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { Fragment, memo } from "react";
import * as THREE from "three";
import AvatarHead from "./AvatarHead/AvatarHead";
import Lighting from "../Lighting";
import Crayons from "./Crayons/Crayons";
import Drawings from "./Drawings/Drawings";
import Clay from "./Clay/Clay";

const Items = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <Lighting />
      {/* page 1 */}
      <AvatarHead position={[0, -h * 0.7, 0]} scale={4} />
      {/* page 2 */}
      <Crayons position={[0, -h, 0]} />
      {/* page 3 */}
      <Drawings position={[0, -h * 2, 0]} />
      {/* page 4 */}
      <Clay position={[0, -h * 3.5, 0]} />
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[w / 6, -h * 4, 0]}
        scale={[1, 1, 1]}
      />
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[w / 6, -h * 5, 0]}
        scale={[1, 1, 1]}
      />
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[w / 6, -h * 6, 0]}
        scale={[1, 1, 1]}
      />
      <Box
        material={new THREE.MeshNormalMaterial()}
        position={[w / 6, -h * 8, 0]}
        scale={[1, 1, 1]}
      />
    </Scroll>
  );
};

export default memo(Items);
