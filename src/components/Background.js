import React from 'react'
import title from "../assets/img/animatedLogo.gif"
import "../styles/components/Background.css"

export default function Background() {
  return (
    <div className="area">
      <img className="titleCard" src={title} />
    </div>
  )
}
