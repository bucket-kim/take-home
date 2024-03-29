/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/computer.glb --transform --precision=10 --shadows --keepnames --meta
*/

import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Plane, Text, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const Computer = (props) => {
  const { nodes } = useGLTF("/models/computer-transformed.glb");

  const screenRef = useRef();

  const screenMap = useTexture("/textures/computer/screen.jpg");
  const computerMap = useTexture("/textures/computer/computer_baseColor.webp");
  const computerNormal = useTexture("/textures/computer/computer_Normal.webp");
  const computerEmission = useTexture(
    "/textures/computer/computer_Emission.webp"
  );
  computerMap.flipY = false;
  computerNormal.flipY = false;
  computerEmission.flipY = false;
  computerMap.colorSpace = THREE.SRGBColorSpace;
  screenMap.colorSpace = THREE.SRGBColorSpace;

  const computerMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: computerMap,
      emissiveMap: computerEmission,
      emissiveIntensity: 0,
      normalMap: computerNormal,
    });
  }, []);

  const [clicked, setClicked] = useState(false);

  const colorRef = useRef(1);

  const handleClick = () => {
    setClicked((prev) => !prev);

    gsap.to(colorRef, {
      current: clicked ? 1 : 0,
      duration: 0.5,
    });
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <Text
        color="#afafaf"
        anchorX="center"
        anchorY="middle"
        // rotation-y={Math.PI}
        position-y={0.8}
        font="/Inter-Bold.woff"
        scale={0.1}
      >
        Toggle Me
      </Text>
      <group>
        <group scale={1.175} position={[-0.15, 0.175, -0.25]}>
          <Plane
            ref={screenRef}
            name="screen"
            castShadow
            receiveShadow
            scale={[1.28, 0.72]}
            material={
              new THREE.MeshBasicMaterial({
                map: screenMap,
                transparent: true,
              })
            }
            userData={{ name: "screen" }}
          />
        </group>
        <group scale={1.17} position={[-0.15, 0.175, -0.249]}>
          <Plane
            name="screen"
            castShadow
            receiveShadow
            scale={[1.28, 0.72]}
            material={
              new THREE.MeshStandardMaterial({
                color: "#000000",
                transparent: true,
                opacity: colorRef.current,
              })
            }
            userData={{ name: "screen" }}
          />
        </group>
        <mesh
          name="Computer"
          castShadow
          receiveShadow
          geometry={nodes.Computer.geometry}
          material={computerMaterial}
          userData={{ name: "Computer" }}
        />
      </group>
    </group>
  );
};

export default memo(Computer);

useGLTF.preload("/models/computer-transformed.glb");
