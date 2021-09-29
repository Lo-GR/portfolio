import React, { useState } from 'react'
import "../../styles/components/AboutPage.css"
import Close from "../../assets/svg/close.svg"

export default function AboutPage({ title, description, tech }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <div>
      <div className="clickHere" onClick={handleClick}>
        <h2 className="mark">?</h2>
      </div>
      {clicked ? 
        <div className="popUp">
          <img className="exit" src={Close} alt="exit" onClick={handleClick}/>
          <h3>{title}</h3>
          <div className="aboutText">
            {description}
            <h3>Tech Use For This Page</h3>
            {tech}
          </div>
        </div> 
      : 
        null
      }
    </div>
  )
}
