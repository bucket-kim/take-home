import { Plane, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { Fragment, useMemo } from "react";
import * as THREE from "three";

const Drawings = (props) => {
  const drawing01 = useTexture("/textures/kidDrawing/kidDrawing001.jpg");
  drawing01.colorSpace = THREE.SRGBColorSpace;
  const drawing02 = useTexture("/textures/kidDrawing/kidDrawing002.jpeg");
  drawing02.colorSpace = THREE.SRGBColorSpace;
  const drawing03 = useTexture("/textures/kidDrawing/kidDrawing003.jpeg");
  drawing03.colorSpace = THREE.SRGBColorSpace;

  const { width: w, height: h } = useThree((state) => state.viewport);

  const mat1 = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: drawing01,
      toneMapped: false,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  const mat2 = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: drawing02,
      toneMapped: false,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  const mat3 = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: drawing03,
      toneMapped: false,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  return (
    <group {...props}>
      <group scale={4} position={[5, -7, 0]} rotation={[0, 0, -0.5]}>
        <Plane material={mat1} scale={[2, 1.5, 0]} castShadow />
      </group>
      <group scale={w / 2.5} position={[0, 3, 0]} rotation={[0, 0, 0]}>
        <Plane material={mat2} scale={[3, 1.5, 0]} castShadow />
      </group>
      <group position={[-4, -6, 0]} scale={4} rotation={[0, 0, 0.25]}>
        <Plane material={mat3} scale={[2, 1.5, 0]} castShadow />
      </group>
    </group>
  );
};

export default Drawings;
