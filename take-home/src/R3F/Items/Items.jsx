import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { memo } from "react";
import AvatarHead from "./AvatarHead/AvatarHead";
import Lighting from "../Lighting";
import Crayons from "./Crayons/Crayons";
import Drawings from "./Drawings/Drawings";
import Clay from "./Clay/Clay";
import Lego from "./Lego/Lego";
import Computer from "./Computer/Computer";
import Parents from "./Parents/Parents";
import Countries from "./Countries/Countries";
import Virus from "./Virus/Virus";
import School from "./School/School";
import Tech from "./Tech/Tech";
import VsCodeModel from "./VsCodeModel/VsCodeModel";
import Engineering from "./Engineering/Engineering";
import VidPlane from "./VidPlane/VidPlane";

const Items = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <Lighting />
      {/* page 1 */}
      <AvatarHead position={[0, -h * 0.3, 0]} scale={4} />
      {/* page 2 */}
      <Crayons
        position={[w <= 5 ? 0 : w / 4.5, -h, 0]}
        scale={w <= 5 ? 0.45 : 1}
      />
      {/* page 3 */}
      <Drawings
        position={[w <= 5 ? 1 : 0, w <= 5 ? -h * 1.9 : -h * 2, 0]}
        scale={w <= 5 ? 0.3 : 1}
      />
      {/* page 4 */}
      <Clay
        position={[w <= 5 ? 0 : w / 4, w <= 5 ? -h * 2.9 : -h * 3.1, -10]}
        scale={w <= 5 ? 0.5 : 1.25}
      />
      {/* page5 */}
      <Lego
        position={[w <= 5 ? 0 : -5, w <= 5 ? -h * 4.2 : -h * 4.25, 0.5]}
        scale={w <= 5 ? 1.25 : 2}
      />
      {/* page6 */}
      <Computer
        position={[w <= 5 ? 0 : 5.5, -h * 4.9, 0]}
        scale={w <= 5 ? 2.5 : 5}
      />
      {/* page 7 */}
      {/* <GameImage position={[0, -h * 6, 0]} /> */}

      {/* page 8 */}
      <Parents
        position={[w <= 5 ? 1.8 : 0, w <= 5 ? -h * 5.8 : -h * 6.1, 0]}
        scale={w <= 5 ? 0.4 : 1}
      />
      {/* page 9 */}
      <Countries
        position={[w <= 5 ? -0.7 : 2, w <= 5 ? -h * 6.9 : -h * 7, 0]}
        scale={w <= 5 ? 0.35 : 1}
      />
      {/* page 10 */}
      <School
        position={[w <= 5 ? 0 : -5, -h * 8, 0]}
        scale={w <= 5 ? 0.5 : 1}
      />
      {/* page 11 */}
      <Tech
        position={[w <= 5 ? -2.5 : 0, -h * 9, 0]}
        scale={w <= 5 ? 0.5 : 1}
      />
      {/* page 14 */}
      <Virus
        position={[w <= 5 ? 0 : w / -5, -h * 10.95, 0]}
        scale={w <= 5 ? 0.8 : 1.2}
      />
      {/* Page 16 */}
      <VsCodeModel
        position={[w <= 5 ? 0 : w / 4.5, w <= 5 ? -h * 12.8 : -h * 13, 0]}
        scale={w <= 5 ? 1 : 2.5}
      />

      {/* Page 17 */}
      <Engineering
        position={[0, w <= 5 ? -h * 13.9 : -h * 14, 0]}
        scale={w <= 5 ? 0.5 : 1}
      />
      {/* Page 18 */}
      <VidPlane
        scale={w <= 5 ? 0.6 : 1}
        position={[w <= 5 ? 0 : 4, w <= 5 ? -h * 14.9 : -h * 15, 0]}
      />
    </Scroll>
  );
};

export default memo(Items);
