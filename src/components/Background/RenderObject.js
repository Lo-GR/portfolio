import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'

export default function RenderObject({ position }) {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += .01;
    mesh.current.rotation.y += .02;
  })
  return (
    <mesh 
      position={position}
      ref={mesh}
    >
      <octahedronGeometry args = {[1, 0]} />
      <meshStandardMaterial 
      />
    </mesh>
  )
}
