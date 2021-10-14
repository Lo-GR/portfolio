import React from 'react'
import "../styles/components/ProjectDetails.css";
import Arrow from "../assets/svg/arrow-circle-right.svg"

export default function ProjectDetails({ siteImage, siteTitle, siteDesc, siteTech, siteLink}) {
  return (
    <div className="projectDetailsArea">
      <img src={siteImage} className="websiteImage" alt="application screenshot"/>
      <div className="details">
        <a href={siteLink} target="_blank" rel="noreferrer">
          <div className="linkSpace">
            <h2>{siteTitle}</h2>
            <img src={Arrow} alt="Link Arrow"/>
          </div>
        </a>
        <h3>Description</h3>
        <p>{siteDesc}</p>
        <h3>Tech</h3>
        <p>{siteTech}</p>
      </div>
    </div>
  )
}
