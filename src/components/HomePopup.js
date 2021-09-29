import React, {useState} from 'react'
import "../styles/components/HomePopup.css"
import AboutPage from "../components/shared/AboutPage"
import Portrait from "../assets/img/stock-guy.jpg"
import Envelope from "../assets/svg/envelope-f.svg"
import GitHub from "../assets/img/GitHub-Mark-64px.png"
import LinkedIn from "../assets/img/LI-In-Bug.png"
import LeetCode from "../assets/img/leetcode.png"
import Arrow from "../assets/svg/chevrons-down.svg"


export default function HomePopup({ setAppear }) {
  const [ enter, setEnter ] = useState(false)
  const handleEnter = () =>{
    setEnter(true);
    setAppear(true);
  }
  const aboutText = {
    title: "About this website",
    description: "I built this website with the intention to show off several skills I have developed. Each page will include the dancing question mark icon with a description of the underlying tech behind how that page was made. The background is a render object powered by WebGL through Three.js",
    tech: "React |  Three.js | React Three Fiber | JavaScript"
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
            <h3>Me at a glance...</h3>
            <div className="popupContents"> 
              <div className="images">
                <img className="portrait" src={Portrait} style={{animationDuration: "2s"}}/>
                <div className="iconLinks">
                  <a href="mailto:logan.roth.g@gmail.com" >
                    <img className="icons" src={Envelope} style={{animationDuration: "2.3s"}}/>
                  </a>
                  <a href="https://github.com/Lo-GR" target="_blank">
                    <img className="icons" src={GitHub} style={{animationDuration: "2.6s"}}/>
                  </a>
                  <a href="https://linkedin.com/in/lo-gr" target="_blank">
                    <img className="icons" src={LinkedIn} style={{animationDuration: "2.9s"}}/>
                  </a>
                  <a href="https://leetcode.com/Lo-GR/" target="_blank">
                    <img className="icons" src={LeetCode} style={{animationDuration: "3.2s"}}/>
                  </a>
                </div>
              </div>
              <div className="contentText" style={{animationDuration: "3.5s"}}>
                <div className="briefAboutMe">
                  <div className="briefChild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus vehicula, placerat mauris nec, congue nisi. Donec pretium orci at lacus sodales mollis. Aliquam erat volutpat. Mauris viverra semper nunc, at pharetra odio laoreet eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi efficitur, diam sit amet ultrices scelerisque, quam enim eleifend ipsum, sit amet sollicitudin dui metus at turpis. Suspendisse potenti. Aenean varius imperdiet malesuada. Quisque ante ante, ultrices sit amet orci vitae, ornare mollis lectus. Aliquam nulla turpis, imperdiet convallis est ut, euismod scelerisque eros. Nullam dapibus scelerisque ultrices. Nulla bibendum risus id mollis semper. Nam vulputate quam semper odio ullamcorper cursus. Nunc porta lectus a erat malesuada, at ornare metus mattis.</p>
                  </div>
                  {/* <div className="briefChild">
                  Will add this back later when wanting to add additional stats
                  <img className="icons" src={Time} />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="about" style={{animationDuration: "3.9s"}} >
              <AboutPage title={aboutText.title} description={aboutText.description} tech={aboutText.tech}/> 
              <p style={{marginLeft: "5px"}}>Click this icon to learn more about this site</p>
            </div>
            <div className="more" style={{animationDuration: "4.2s"}}>
              <h3>Scroll down for links to additional information on my background, my projects and my personal blog!</h3>
              <p></p>
              <img src={Arrow} />
            </div>
          </div>
        }
      </div>
    </div>
  )
}
