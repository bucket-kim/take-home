/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/vscode.glb --transform --precision=10 --shadows --keepnames --meta
*/

import React, { memo, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Vscode = (props) => {
  const { nodes, materials } = useGLTF("/models/vscode-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        userData={{ name: "Cube" }}
      />
      <mesh
        name="Sphere"
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.007"]}
        position={[-1.5970294476, 0.8000321388, 0.0648519546]}
        scale={0.057824336}
        userData={{ name: "Sphere" }}
      />
      <mesh
        name="Sphere001"
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.008"]}
        position={[-1.4029242992, 0.8000321388, 0.0648519546]}
        scale={0.057824336}
        userData={{ name: "Sphere.001" }}
      />
      <mesh
        name="Sphere002"
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Material.009"]}
        position={[-1.1994270086, 0.8000321388, 0.0648519546]}
        scale={0.057824336}
        userData={{ name: "Sphere.002" }}
      />
      <mesh
        name="Cube004"
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.002"]}
        position={[0.4076382816, -0.5151287317, 0.0629109517]}
        scale={[0.7215178013, 0.7215178013, 0.4574909806]}
        userData={{ name: "Cube.004" }}
      />
      <mesh
        name="Sphere005"
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Material.006"]}
        position={[-1.5014419556, 0.1348913759, 0.0648519546]}
        scale={0.045968961}
        userData={{ name: "Sphere.005" }}
      />
      <mesh
        name="Cube008"
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.005"]}
        position={[-1.2144351006, 0.1345430166, 0.0987601727]}
        scale={[0.1335894763, 0.1335894763, 0.0916252881]}
        userData={{ name: "Cube.008" }}
      />
      <mesh
        name="Cube009"
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.003"]}
        position={[-1.2144351006, -0.0277616531, 0.0987601727]}
        scale={[0.1335894763, 0.1335894763, 0.0916252881]}
        userData={{ name: "Cube.009" }}
      />
      <mesh
        name="Sphere007"
        castShadow
        receiveShadow
        geometry={nodes.Sphere007.geometry}
        material={materials["Material.004"]}
        position={[-0.6016474366, -0.4943951368, 0.0648519546]}
        scale={0.045968961}
        userData={{ name: "Sphere.007" }}
      />
    </group>
  );
};

export default memo(Vscode);

useGLTF.preload("/models/vscode-transformed.glb");
