import React, { useState } from 'react'
import "../../styles/components/AboutPage.css"
import Close from "../../assets/svg/close.svg"

export default function AboutPage() {
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
          <img src={Close} />
          Big Testy
        </div> 
      : 
        null
      }
    </div>
  )
}
