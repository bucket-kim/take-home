import { Box, Html, Sphere, Text, TorusKnot } from "@react-three/drei";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const Shapes = (props) => {
  const sphereRef = useRef(null);
  const knotRef = useRef(null);

  const [clicked, setClicked] = useState(false);

  const sphereHandleClick = () => {
    setClicked((prev) => !prev);

    if (!sphereRef.current) return;
    if (!knotRef.current) return;

    if (clicked) {
      gsap.to(sphereRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.15,
      });
      gsap.to(knotRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
      });
    }
  };

  const knotHandleClick = () => {
    setClicked((prev) => !prev);

    if (!sphereRef.current) return;
    if (!knotRef.current) return;

    if (!clicked) {
      gsap.to(knotRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.15,
      });
      gsap.to(sphereRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
      });
    }
  };

  return (
    <group {...props}>
      <Text
        color="#afafaf"
        anchorX="center"
        anchorY="middle"
        rotation-y={Math.PI}
        position-y={1.5}
        font="/Inter-Bold.woff"
        scale={0.3}
      >
        Toggle Me
      </Text>
      <Sphere
        material={new THREE.MeshStandardMaterial()}
        castShadow
        scale={1}
        ref={sphereRef}
        onPointerDown={sphereHandleClick}
      />
      <TorusKnot
        ref={knotRef}
        material={new THREE.MeshStandardMaterial()}
        castShadow
        onPointerDown={knotHandleClick}
        scale={0}
      />
    </group>
  );
};

export default Shapes;
