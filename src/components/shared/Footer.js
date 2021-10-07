import React from 'react'
import "../../styles/components/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footerArea">
      <div className="footerContent">
        <div className="personalInfo">
          <p>Lo-GR</p>
          <p>Logan Roth</p>
          <p>Redmond, WA</p>
        </div>
        <div className="siteLinks">
          <Link to="/" style={{color: 'inherit' }}>
            <p>Home</p>
          </Link>
          <Link to="/projects" style={{color: 'inherit' }}>
            <p>Projects</p>
          </Link>
          <Link to="/aboutme" style={{color: 'inherit' }}>
            <p>About Me</p>
          </Link>
          <p>Blog</p>
        </div>
        <div className="additionalLinks">
          <a href="https://github.com/Lo-GR" target="_blank" rel="noreferrer"><p>GitHub</p> </a>
          <a href="https://linkedin.com/in/lo-gr" target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
          <a href="https://leetcode.com/Lo-GR/" target="_blank" rel="noreferrer"><p>LeetCode</p></a>
        </div>
      </div>
      <div className="sectionDiver" />
      <div className="copyRight">
        <p>©2021 Logan Roth. License <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT</a></p>
      </div>
    </div>
  )
}
