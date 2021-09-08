import React from 'react'
import "../styles/components/HomepageLinks.css"

export default function HomepageLinks() {
  return (
    <div className="homepageArea">
      <div className="linkArea">
        <div className="backPart">
          <div className="frontPart">
            <h2>&lt;/&gt;</h2>
          </div>
          <h2 className="homepageText">Coding Projects</h2>
        </div>
      </div>
      <div className="linkArea">
        <div className="backPart">
          <div className="frontPart">
            <h2>ME</h2>
          </div>
        </div>
      </div>
      <div className="linkArea">
        <div className="backPart">
          <div className="frontPart">
            <h2>?!</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
