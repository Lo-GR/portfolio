import React, {useState} from 'react'
import "../styles/components/HomePopup.css"

export default function HomePopup({ setAppear }) {
  const [ enter, setEnter ] = useState(false)
  const handleEnter = () =>{
    setEnter(true);
    setAppear(true);
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
            <h2>WELCOME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus vehicula, placerat mauris nec, congue nisi. Donec pretium orci at lacus sodales mollis. Aliquam erat volutpat. Mauris viverra semper nunc, at pharetra odio laoreet eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi efficitur, diam sit amet ultrices scelerisque, quam enim eleifend ipsum, sit amet sollicitudin dui metus at turpis. Suspendisse potenti. Aenean varius imperdiet malesuada. Quisque ante ante, ultrices sit amet orci vitae, ornare mollis lectus. Aliquam nulla turpis, imperdiet convallis est ut, euismod scelerisque eros. Nullam dapibus scelerisque ultrices. Nulla bibendum risus id mollis semper. Nam vulputate quam semper odio ullamcorper cursus. Nunc porta lectus a erat malesuada, at ornare metus mattis.</p>
          </div>
        }
      </div>
    </div>
  )
}
