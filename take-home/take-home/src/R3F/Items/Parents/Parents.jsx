import { Plane, useTexture } from "@react-three/drei";
import gsap from "gsap";
import React, { useEffect, useMemo, useRef } from "react";
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

  const dadRef = useRef(null);
  const sonRef = useRef(null);

  useEffect(() => {
    if (!dadRef.current) return;
    if (!sonRef.current) return;
    gsap.fromTo(
      dadRef.current.rotation,
      {
        z: 0.25,
      },
      { z: -0.25, yoyo: true, repeat: -1, ease: "steps(1)", duration: 1 }
    );
    gsap.fromTo(
      sonRef.current.rotation,
      {
        z: -0.1,
      },
      { z: 0.1, yoyo: true, repeat: -1, ease: "steps(1)", duration: 1.5 }
    );
  }, []);

  return (
    <group {...props}>
      <group scale={7.5} position={[-1.5, 0, 0]} ref={dadRef}>
        <Plane
          material={dadMat}
          scale={[0.82, 1.049, 0]}
          rotation={[Math.PI, 0, 0]}
        />
      </group>
      <group scale={7.5} position={[-7.5, 0, 0]} ref={sonRef}>
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
