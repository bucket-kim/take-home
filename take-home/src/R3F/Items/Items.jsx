import { Box, Float, Scroll, useIntersect, useScroll } from "@react-three/drei";
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
import School from "./School/School";
import Tech from "./Tech/Tech";
import VsCode from "./VscodeModel/VsCode";
import Engineering from "./Engineering/Engineering";
import VidPlane from "./VidPlane/VidPlane";

const Items = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <Lighting />
      {/* page 1 */}
      <AvatarHead position={[0, -h * 0.65, 0]} scale={4} />
      {/* page 2 */}
      <Crayons position={[w / 4.5, -h, 0]} />
      {/* page 3 */}
      <Drawings position={[0, -h * 2, 0]} />
      {/* page 4 */}
      {/* <Clay position={[w / 4, -h * 3.1, -10]} scale={1.25} /> */}
      {/* page5 */}
      <Lego position={[-5, -h * 4.25, 0.5]} scale={2} />
      {/* page6 */}
      <Computer position={[5.5, -h * 4.9, 0]} scale={5} />
      {/* page 7 */}
      {/* <GameImage position={[0, -h * 6, 0]} /> */}

      {/* page 8 */}
      <Parents position={[0, -h * 6.1, 0]} />
      {/* page 9 */}
      <Countries position={[2, -h * 7, 0]} scale={1} />
      {/* page 10 */}
      <School position={[-5, -h * 8, 0]} />
      {/* page 11 */}
      <Tech position={[0, -h * 9, 0]} />
      {/* page 14 */}
      <Virus position={[w / -5, -h * 10.95, 0]} scale={1.2} />
      {/* Page 16 */}
      <VsCode position={[w / 4.5, -h * 13, 0]} scale={2.5} />

      {/* Page 17 */}
      <Engineering position={[0, -h * 14, 0]} scale={1} />
      {/* Page 18 */}
      <VidPlane scale={1} position={[4, -h * 15, 0]} />
    </Scroll>
  );
};

export default memo(Items);
