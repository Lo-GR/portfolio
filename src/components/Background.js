import React from 'react'
import title from "../assets/img/animatedLogo.gif"
import "../styles/components/Background.css"

export default function Background({entered}) {
  const handleToggle = () =>{
    if(entered){
      return "1"
    }else{
      return "0"
    }
  }
  return (
    <div className="area" entered={handleToggle()}>
      <img className="titleCard" src={title} />
    </div>
  )
}
