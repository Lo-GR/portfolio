import React from 'react'
import "../styles/components/HomepageLinks.css"
import { Link } from "react-router-dom";

export default function HomepageLinks() {
  return (
    <div className="homepageArea">
      {/* <Link to="/projects" style={{ textDecoration: 'inherit', color: 'inherit' }}> */}
        <div className="linkArea">
          <div className="backPart">
            <div className="frontPart">
              <h2 className="homepageIcon">&lt;/&gt;</h2>
            </div>
            <h2 className="homepageText">Coding Projects (coming soon)</h2>
          </div>
        </div>
      {/* </Link> */}
      {/* <Link to="/aboutme" style={{ textDecoration: 'inherit', color: 'inherit' }}> */}
        <div className="linkArea">
          <div className="backPart">
            <div className="frontPart">
              <h2 className="homepageIcon">ME</h2>
            </div>
            <h2 className="homepageText">About Me (coming soon)</h2>
          </div>
        </div>
      {/* </Link> */}
      <div className="linkArea">
        <div className="backPart">
          <div className="frontPart">
            <h2 className="homepageIcon">?!</h2>
          </div>
          <h2 className="homepageText">Blog (coming soon)</h2>
        </div>
      </div>
    </div>
  )
}
