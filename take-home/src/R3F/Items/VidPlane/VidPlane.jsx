import { useVideoTexture } from "@react-three/drei";
import React, { Suspense } from "react";

const VidPlane = (props) => {
  const texture = useVideoTexture("/video/rocket.mp4");
  return (
    <group {...props}>
      <mesh scale={5}>
        <planeGeometry args={[1.9, 1.08]} />
        {/* <meshNormalMaterial /> */}
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
};

export default VidPlane;
