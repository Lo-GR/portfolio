import React, { useState } from 'react'
import "../../styles/components/Header.css";
import { Link } from "react-router-dom"
import Menu from "../../assets/svg/menu.svg"
import Close from "../../assets/svg/close.svg"
import HeaderDropDown from './HeaderDropDown';


export default function Header({}) {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDownClick = () =>{
    setDropDown(!dropDown);
  }
  return (
    <div className="container">
      <div className="top" />
      <div className="headerArea">
        <div className="name">
          <h2>Logan</h2>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <h3>Home</h3>
          </Link>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <Link to="/projects" style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <h3>Projects</h3>
          </Link>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <Link to="/aboutme" style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <h3>About Me</h3>
          </Link>
        </div>
        <div className="headerDivider">
          <div className="divide"/>
        </div>
        <div className="linkBox">
          <h3>Blog (Coming soon)</h3>
        </div>
        <div className="headerDividerSingle">
          <div className="divide"/>
        </div>
        <div className="menuIcon" onClick={handleDropDownClick}>
          {dropDown ? 
            <img src={Close} alt="CloseIcon"/> 
            : 
            <img src={Menu} className="menuClosed" alt="MenuIcon"/> 
          }
        </div>
      </div>
      <div className="bottom">
        {dropDown ? <HeaderDropDown /> : null}
      </div>
    </div>
  )
}