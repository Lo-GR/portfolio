import React from 'react'
import Site from "../assets/img/Memory-Space.png"
import "../styles/components/ProjectDetails.css";
import Arrow from "../assets/svg/arrow-circle-right.svg"

export default function ProjectDetails({ siteImage, siteTitle, siteDesc, siteTech}) {
  const siteLink = "https://www.lo-gr.com/"
  return (
    <div className="projectDetailsArea">
      <img src={siteImage} className="websiteImage"/>
      <div className="details">
        <a href={siteLink} target="_blank">
          <div className="linkSpace">
            <h2>{siteTitle}</h2>
            <img src={Arrow} />
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
