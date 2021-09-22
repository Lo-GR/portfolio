import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import RenderObject from './RenderObject'

export default function ThreeFiber() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <pointLight position={[1.73, 2, 1.14]} color={0x3a86ff} intensity={1.2}/>
        <pointLight position={[-1.1, -1.8, 1.8]} color={0xfb5607} intensity={1.2}/>
        <ambientLight />
        <RenderObject />
      </Suspense>
    </Canvas>
  )
}
