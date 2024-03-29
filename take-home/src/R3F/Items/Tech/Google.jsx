/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/google.glb --transform --precision=10 --shadows --keepnames --meta
*/

import React, { memo, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Google = (props) => {
  const { nodes, materials } = useGLTF("/models/google-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Circle_Blue_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle_Blue_0.geometry}
        material={materials.Blue}
        userData={{ name: "Circle_Blue_0" }}
      />
      <mesh
        name="Circle_Green_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle_Green_0.geometry}
        material={materials.Green}
        userData={{ name: "Circle_Green_0" }}
      />
      <mesh
        name="Circle_Red_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle_Red_0.geometry}
        material={materials.material}
        userData={{ name: "Circle_Red_0" }}
      />
      <mesh
        name="Circle_Yellow_0"
        castShadow
        receiveShadow
        geometry={nodes.Circle_Yellow_0.geometry}
        material={materials.Yellow}
        userData={{ name: "Circle_Yellow_0" }}
      />
    </group>
  );
};

export default memo(Google);

useGLTF.preload("/models/google-transformed.glb");
