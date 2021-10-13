import React from 'react'
import Site from "../assets/img/Memory-Space.png"
import "../styles/components/ProjectDetails.css";

export default function ProjectDetails({ siteImage, siteTitle, siteDesc, siteTech}) {
  return (
    <div className="projectDetailsArea">
      <img src={siteImage} className="websiteImage"/>
      <div className="details">
        <h2>{siteTitle}</h2>
        <h3>Description</h3>
        <p>{siteDesc}</p>
        <h3>Tech</h3>
        <p>{siteTech}</p>
      </div>
    </div>
  )
}
