import React from 'react'
import "../../styles/components/Header.css";


export default function Header({}) {
  return (
    <div className="headerArea">
      <div className="linkBox">
        <h2>Home</h2>
      </div>
      <div className="linkBox">
        <h2>Projects</h2>
      </div>
      <div className="linkBox">
        <h2>About Me</h2>
      </div>
      <div className="linkBox">
        <h2>Blog (Coming soon)</h2>
      </div>
    </div>
  )
}