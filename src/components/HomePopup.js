import React, {useState, useEffect} from 'react'
import "../styles/components/HomePopup.css"

export default function HomePopup() {
  const [ enter, setEnter ] = useState(false)
  const handleEnter = () =>{
    setEnter(true);
  }
  return (
    <div>
      <div className="mainArea" >
        {!enter ? 
          <div className="pressableEnter" onClick={handleEnter}>
            <h2>E N T E R</h2>
          </div>
        :
          <div className="popupFrame" >
            <p>text</p>
          </div>
        }
      </div>
    </div>
  )
}
