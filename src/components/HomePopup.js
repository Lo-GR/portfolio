import React, { useContext } from 'react'
import { Context } from "../context/mainContext"
import "../styles/components/HomePopup.css"
import AboutPage from "../components/shared/AboutPage"
import Portrait from "../assets/img/portrait.png"
import Envelope from "../assets/svg/envelope-f.svg"
import GitHub from "../assets/img/GitHub-Mark-64px.png"
import LinkedIn from "../assets/img/LI-In-Bug.png"
import LeetCode from "../assets/img/leetcode.png"
import Arrow from "../assets/svg/chevrons-down.svg"


export default function HomePopup({ setAppear, browser }) {
  const { enter, setEnter } = useContext(Context);
  const handleEnter = () =>{
    setEnter(true);
  }
  const aboutText = {
    title: "About this website",
    description: "I built this website with the intention to show off several skills I have developed. Each page will include the dancing question mark icon with a description of the underlying tech behind how that page was made. The background is a render object powered by WebGL through Three.js.",
    tech: "React |  Three.js | React Three Fiber | JavaScript"
  }
  return (
    <div>
      <div className="mainArea" >
        {!enter ? 
        <div>
          <div className="pressableEnter" onClick={handleEnter}>
            <h2>E N T E R</h2>
          </div>
            {browser === "Apple Safari" ? <div className="browserWarning"><h3>-Please Note-</h3><p> It appears you're using Safari/iPhone browsers! That's cool. Just know that Three.js does not work well with Apple. Normally, there's a cool object floating here. I had to disable it on certain browsers. If you'd like to see it, please try another browser!</p></div> : null}
        </div>
        :
          <div className="popupFrame" >
            <h2>WELCOME</h2>
            <h3>Hi! I'm Logan...</h3>
            <div className="popupContents"> 
              <div className="images">
                <img className="portrait" src={Portrait} style={{animationDuration: "2s"}} alt="self portrait"/>
                <div className="iconLinks">
                  <a href="mailto:logan.roth.g@gmail.com" >
                    <img className="icons" src={Envelope} style={{animationDuration: "2.3s"}} alt="mail"/>
                  </a>
                  <a href="https://github.com/Lo-GR" target="_blank" rel="noreferrer">
                    <img className="icons" src={GitHub} style={{animationDuration: "2.6s"}} alt="GitHub"/>
                  </a>
                  <a href="https://linkedin.com/in/lo-gr" target="_blank" rel="noreferrer">
                    <img className="icons" src={LinkedIn} style={{animationDuration: "2.9s"}} alt="LinkedIN"/>
                  </a>
                  <a href="https://leetcode.com/Lo-GR/" target="_blank" rel="noreferrer">
                    <img className="icons" src={LeetCode} style={{animationDuration: "3.2s"}} alt="LeetCode"/>
                  </a>
                </div>
              </div>
              <div className="contentText" style={{animationDuration: "3.5s"}}>
                <div className="briefAboutMe">
                  <div className="briefChild">
                    <h3>Brief About Me</h3>
                    <div className="sectionDivider" />
                    <p>I am a Cloud Engineer and native Washingtonian living in Redmond. I have a background in business, customer service and communication. I graduated from <a href="https://www.epicodus.com/" target="_blank" rel="noreferrer"><b>Epicodus</b></a> web development school and from South Dakota State University (long story) with a Bachelor of Science in Entrepreneurial Studies and Marketing. I'm sure if you're here, you're likely a recruiter and here to get an idea of my skills. So here's a quick rundown:</p>
                    <h3>Tech I've Worked With</h3>
                    <div className="sectionDivider" />
                    <div className="skillsTechArea">
                      <div className="skillsTech">JavaScript</div>
                      <div className="skillsTech">C#</div>
                      <div className="skillsTech">TypeScript</div>
                      <div className="skillsTech">AWS</div>
                      <div className="skillsTech">HTML5</div>
                      <div className="skillsTech">CSS3</div>
                      <div className="skillsTech">React</div>
                      <div className="skillsTech">React Native</div>
                      <div className="skillsTech">ASP.NET 5</div>
                      <div className="skillsTech">Firebase</div>
                      <div className="skillsTech">Node.js</div>
                      <div className="skillsTech">SQL</div>
                      <div className="skillsTech">NPM</div>
                      <div className="skillsTech">Three.js</div>
                    </div>
                    <h3>Soft Skills</h3>
                    <div className="sectionDivider" />
                    <div className="skillsTechArea">
                      <div className="skillsTech">Professional Communication</div>
                      <div className="skillsTech">Team Oriented</div>
                      <div className="skillsTech">Growth Mindset</div>
                      <div className="skillsTech">Adaptable</div>
                      <div className="skillsTech">Servant Leadership</div>
                      <div className="skillsTech">Tech Passionate</div>
                      <div className="skillsTech">DEI Conscious</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="about" style={{animationDuration: "3.9s"}} >
              <AboutPage title={aboutText.title} description={aboutText.description} tech={aboutText.tech}/> 
              <p style={{marginLeft: "5px"}}>Click this icon to learn more about this site</p>
            </div> */}
            <div className="more" style={{animationDuration: "4.2s"}}>
              <h3>Scroll down for links to additional information on my background, my projects and my personal blog!</h3>
              <p>(Note: Some links may not be active, this site is a WIP)</p>
              <img src={Arrow} alt="down arrow"/>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
