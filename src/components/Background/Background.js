import React from 'react'
import "../../styles/components/Background.css"
import ThreeFiber from './ThreeFiber'

export default function Background({ animatedBackground }) {
  return (
    <div className="area" >
      {animatedBackground ? <ThreeFiber /> : null}
    </div>
  )
}
