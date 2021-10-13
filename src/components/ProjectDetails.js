import React from 'react'
import Site from "../assets/img/Memory-Space.png"
import "../styles/components/ProjectDetails.css";

export default function ProjectDetails() {
  return (
    <div className="projectDetailsArea">
      <img src={Site} className="websiteImage"/>
      <div className="details">
        <h2>Memory Space</h2>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci. In vitae turpis massa sed elementum tempus egestas. Interdum velit laoreet id donec ultrices tincidunt arcu. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Etiam sit amet nisl purus in mollis. Eget felis eget nunc lobortis m</p>
        <h3>Tech</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
    </div>
  )
}
