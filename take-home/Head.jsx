/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/head.glb --transform --precision=10 --shadows --keepnames --meta
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/head-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="hat"
        castShadow
        receiveShadow
        geometry={nodes.hat.geometry}
        material={nodes.hat.material}
        userData={{ name: "hat" }}
      />
      <mesh
        name="eggy_head"
        castShadow
        receiveShadow
        geometry={nodes.eggy_head.geometry}
        material={nodes.eggy_head.material}
        userData={{ name: "eggy_head" }}
      />
      <mesh
        name="hair"
        castShadow
        receiveShadow
        geometry={nodes.hair.geometry}
        material={nodes.hair.material}
        userData={{ name: "hair" }}
      />
    </group>
  );
}

useGLTF.preload("/head-transformed.glb");
