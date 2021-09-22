import React, { useRef } from 'react'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

export default function RenderObject({ position }) {
  const [normalMap, roughness, color, displacement] = useLoader(TextureLoader, ["MetalPlates006_1K_NormalGL.jpg", "MetalPlates006_1K_Roughness.jpg", "MetalPlates006_1K_Color.jpg", "MetalPlates006_1K_Displacement.jpg"])
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += .01;
    mesh.current.rotation.y += .02;
  })
  return (
    <mesh 
      position={position}
      ref={mesh}
      scale={2}
    >
      <octahedronGeometry args = {[1, 0]} />
      <meshStandardMaterial 
        map={color}
        metalness={.8}
        roughness={roughness}
        normalMap={normalMap}
      />
    </mesh>
  )
}
