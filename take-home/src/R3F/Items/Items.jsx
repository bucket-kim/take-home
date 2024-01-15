import { Box, Scroll, useIntersect, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { Fragment, memo } from "react";
import * as THREE from "three";
import AvatarHead from "./AvatarHead/AvatarHead";
import Lighting from "../Lighting";
import Crayons from "./Crayons/Crayons";
import Drawings from "./Drawings/Drawings";
import Clay from "./Clay/Clay";
import Lego from "./Lego/Lego";
import Computer from "./Computer/Computer";
import Parents from "./Parents/Parents";
import Countries from "./Countries/Countries";
import GameImage from "./GameImage/GameImage";
import Virus from "./Virus/Virus";

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
      <Clay position={[0, -h * 3.2, 0]} />
      {/* page5 */}
      <Lego position={[0, -h * 4.25, 0.5]} scale={1.5} />
      {/* page6 */}
      <Computer position={[0, -h * 5, 0]} scale={4.5} />
      {/* page 7 */}
      <GameImage position={[0, -h * 6, 0]} />

      {/* page 8 */}
      <Parents position={[0, -h * 7, 0]} />
      {/* page 9 */}
      <Countries position={[w / -6, -h * 8, 0]} scale={w / 22} />
      {/* page 14 */}
      <Virus position={[w / -6, -h * 11, 0]} />
    </Scroll>
  );
};

export default memo(Items);
