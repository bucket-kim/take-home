import { Plane, useTexture } from "@react-three/drei";
import React, { useMemo } from "react";
import * as THREE from "three";

const Parents = (props) => {
  const dadMap = useTexture("/textures/parents/dad.png");
  const sonMap = useTexture("/textures/parents/son.png");
  dadMap.flipY = false;
  sonMap.flipY = false;
  dadMap.colorSpace = THREE.SRGBColorSpace;
  sonMap.colorSpace = THREE.SRGBColorSpace;
  const dadMat = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: dadMap,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }, []);
  const sonMat = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: sonMap,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
  }, []);

  return (
    <group {...props}>
      <group scale={7.5} position={[3, 0, 0]}>
        <Plane
          material={dadMat}
          scale={[0.82, 1.049, 0]}
          rotation={[Math.PI, 0, 0]}
        />
      </group>
      <group scale={7.5} position={[-3, 0, 0]}>
        <Plane
          material={sonMat}
          scale={[0.838, 0.977, 0]}
          rotation={[Math.PI, 0, 0]}
        />
      </group>
    </group>
  );
};

export default Parents;
