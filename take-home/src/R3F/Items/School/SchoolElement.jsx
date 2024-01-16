import { Edges, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const SchoolElement = (props) => {
  const { nodes, materials } = useGLTF("/models/roxanne-transformed.glb");

  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime;
    ref.current.rotation.y += 0.005;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={ref}
        name="Suzanne"
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        userData={{ name: "Suzanne" }}
        scale={2}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
    </group>
  );
};

export default SchoolElement;
useGLTF.preload("/models/roxanne-transformed.glb");
