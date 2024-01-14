/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/crayon.glb --transform --precision=10 --shadows --keepnames --meta
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/crayon-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="Object_2" castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} scale={[0.4878318012, 0.4878318608, 0.4878318608]} userData={{ name: 'Object_2' }} />
    </group>
  )
}

useGLTF.preload('/crayon-transformed.glb')
