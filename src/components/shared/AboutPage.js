import React, { useState } from 'react'
import "../../styles/components/AboutPage.css"

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
      {clicked ? <div> Big Testy</div> : null}
    </div>
  )
}
