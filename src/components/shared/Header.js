import React from 'react'
import "../../styles/components/Header.css";


export default function Header({}) {
  return (
    <div className="container">
      <div className="top" />
      <div className="headerArea">
        <div className="linkBox">
          <h2>Logan</h2>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <h3>Home</h3>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <h3>Projects</h3>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <h3>About Me</h3>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <h3>Blog (Coming soon)</h3>
        </div>
      </div>
    </div>
  )
}