import React from 'react'
import "../../styles/components/Footer.css";

export default function Footer() {
  return (
    <div className="footerArea">
      <div className="footerContent">
        <div className="personalInfo">
          <p>Lo-GR</p>
          <p>Logan Roth</p>
          <p>Redmond, WA</p>
        </div>
        <div className="additionalLinks">
          <p>Lo-GR</p>
          <p>Logan Roth</p>
          <p>Redmond, WA</p>
        </div>
      </div>
      <div className="sectionDiver" />
      <div className="copyRight">
        <p>©2021 Logan Roth. License <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a></p>
      </div>
    </div>
  )
}
