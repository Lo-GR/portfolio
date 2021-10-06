import React from 'react'
import { Link } from "react-router-dom"
import "../../styles/components/HeaderDropDown.css";

export default function HeaderDropDown() {
  return (
    <div className="headerDropDownArea">
      <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit' }}>
        <h3>Home</h3>
      </Link>
      <Link to="/projects" style={{ textDecoration: 'inherit', color: 'inherit' }}>
        <h3>Projects</h3>
      </Link>
      <Link to="/aboutme" style={{ textDecoration: 'inherit', color: 'inherit' }}>
        <h3>About Me</h3>
      </Link>
      <h3>Blog (Coming soon)</h3>
    </div>
  )
}
