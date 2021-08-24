import React from 'react'
import title from "../assets/img/animatedLogo.gif"
import "../styles/pages/Home.css"

export default function Home({}) {
  return (
    <div>
      <img className={"TitleCard"} src={title} />
    </div>
  )
}
