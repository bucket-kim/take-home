/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/plane.glb --transform --precision=10 --shadows --keepnames --meta
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/plane-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Object_4"
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        userData={{ name: "Object_4" }}
      />
      <mesh
        name="Object_5"
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials["Material.021"]}
        userData={{ name: "Object_5" }}
      />
      <mesh
        name="Object_6"
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["Material.022"]}
        userData={{ name: "Object_6" }}
      />
      <mesh
        name="Object_7"
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials["Material.023"]}
        userData={{ name: "Object_7" }}
      />
      <mesh
        name="Object_8"
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials["Material.024"]}
        userData={{ name: "Object_8" }}
      />
      <mesh
        name="Object_9"
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials["Material.025"]}
        userData={{ name: "Object_9" }}
      />
      <mesh
        name="Object_11"
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials["Material.023"]}
        position={[0.1859868318, -0.4565131068, 0.6842930317]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6325716376, 0.6325716376, 0.6325716972]}
        userData={{ name: "Object_11" }}
      />
      <mesh
        name="Object_12"
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials["Material.025"]}
        position={[0.1859868318, -0.4565131068, 0.6842930317]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6325716376, 0.6325716376, 0.6325716972]}
        userData={{ name: "Object_12" }}
      />
      <mesh
        name="Object_13"
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials["Material.025"]}
        position={[0.1859868318, -0.4565131068, 0.6842930317]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6325716376, 0.6325716376, 0.6325716972]}
        userData={{ name: "Object_13" }}
      />
      <mesh
        name="Object_14"
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials["Material.032"]}
        position={[0.1859868318, -0.4565131068, 0.6842930317]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6325716376, 0.6325716376, 0.6325716972]}
        userData={{ name: "Object_14" }}
      />
      <mesh
        name="Object_15"
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials["Material.032"]}
        position={[0.1859868318, -0.4565131068, 0.6842930317]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6325716376, 0.6325716376, 0.6325716972]}
        userData={{ name: "Object_15" }}
      />
      <mesh
        name="Object_16"
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials["Material.025"]}
        position={[0.1859868318, -0.4565131068, 0.6842930317]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.6325716376, 0.6325716376, 0.6325716972]}
        userData={{ name: "Object_16" }}
      />
      <mesh
        name="Object_18"
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials["Material.023"]}
        position={[0, 0.1867115647, 1.3826589584]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={[0.6599159241, 0.6599159241, 0.180331856]}
        userData={{ name: "Object_18" }}
      />
      <mesh
        name="Object_19"
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials["Material.027"]}
        position={[0, 0.1867115647, 1.3826589584]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={[0.6599159241, 0.6599159241, 0.180331856]}
        userData={{ name: "Object_19" }}
      />
      <mesh
        name="Object_20"
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials["Material.028"]}
        position={[0, 0.1867115647, 1.3826589584]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={[0.6599159241, 0.6599159241, 0.180331856]}
        userData={{ name: "Object_20" }}
      />
    </group>
  );
}

useGLTF.preload("/plane-transformed.glb");
