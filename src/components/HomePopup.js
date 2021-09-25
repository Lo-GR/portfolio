import React, {useState} from 'react'
import "../styles/components/HomePopup.css"
import Portrait from "../assets/img/stock-guy.jpg"


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
            <div className="popupContents"> 
              <div className="image">
                <img className="portrait" src={Portrait} />
              </div>
              <div className="contentText">
                <h3>Me at a glance-</h3>
                <div className="briefAboutMe">
                  <div className="briefChild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus vehicula, placerat mauris nec, congue nisi. Donec pretium orci at lacus sodales mollis. Aliquam erat volutpat. Mauris viverra semper nunc, at pharetra odio laoreet eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi efficitur, diam sit amet ultrices scelerisque, quam enim eleifend ipsum, sit amet sollicitudin dui metus at turpis. Suspendisse potenti. Aenean varius imperdiet malesuada. Quisque ante ante, ultrices sit amet orci vitae, ornare mollis lectus. Aliquam nulla turpis, imperdiet convallis est ut, euismod scelerisque eros. Nullam dapibus scelerisque ultrices. Nulla bibendum risus id mollis semper. Nam vulputate quam semper odio ullamcorper cursus. Nunc porta lectus a erat malesuada, at ornare metus mattis.</p>
                  </div>
                  <div className="briefChild">
                    <p>Etc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
