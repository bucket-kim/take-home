import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { makeNoise4D } from "open-simplex-noise";
import vertexShader from "./vertex";
import fragmentShader from "./fragment";
import gsap from "gsap";

const Clay = (props) => {
  const sphereRef = useRef(null);

  let v3 = new THREE.Vector3();

  let noise = makeNoise4D(Date.now);

  let uniforms = {
    colorA: { type: "vec3", value: new THREE.Vector3(0.5, 0.5, 0.5) },
  };

  useEffect(() => {
    if (!sphereRef.current) return;
    sphereRef.current.geometry.positionData = [];
    for (
      let i = 0;
      i < sphereRef.current.geometry.attributes.position.count;
      i++
    ) {
      v3.fromBufferAttribute(sphereRef.current.geometry.attributes.position, i);
      sphereRef.current.geometry.positionData.push(v3.clone());
    }
  }, []);

  const strengthRef = useRef(0.25);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() / 2;
    const strength = strengthRef.current;

    if (!sphereRef.current) return;
    sphereRef.current.geometry.positionData.forEach((p, idx) => {
      let setNoise = noise(p.x * strength, p.y * strength, p.z * strength, t);
      v3.copy(p).addScaledVector(p, setNoise);
      sphereRef.current.geometry.attributes.position.setXYZ(
        idx,
        v3.x,
        v3.y,
        v3.z
      );
    });

    sphereRef.current.geometry.computeVertexNormals();
    sphereRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const handlePointerHandle = () => {
    if (!strengthRef.current) return;

    gsap.to(strengthRef, {
      current: 0.5,
    });
  };

  const handlePointerOutHandle = () => {
    if (!strengthRef.current) return;

    gsap.to(strengthRef, {
      current: 0.25,
    });
  };

  return (
    <group {...props}>
      <mesh
        ref={sphereRef}
        onPointerDown={handlePointerHandle}
        onPointerUp={handlePointerOutHandle}
      >
        <sphereGeometry args={[3, 50, 50]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
};

export default Clay;
