import React from 'react'
import ProjectDetails from './ProjectDetails'
import "../styles/components/ProjectsContent.css"
import siteData from "../functions/siteData"

export default function ProjectsContent() {
  const { memorySpace, crudBuddy, nationalParks, apod, apod2 } = siteData();
  return (
    <div className="projectsContentArea">
      <h3 className="explain">Below are a list of projects I've worked on previously. If you'd like to discuss any of them, please let me know! </h3>
      <ProjectDetails 
        siteImage={apod2.siteImage} 
        siteTitle={apod2.siteTitle}
        siteDesc={apod2.siteDesc}
        siteTech={apod2.siteTech}
        siteLink={apod2.siteLink}
      />
      <ProjectDetails 
        siteImage={memorySpace.siteImage} 
        siteTitle={memorySpace.siteTitle}
        siteDesc={memorySpace.siteDesc}
        siteTech={memorySpace.siteTech}
        siteLink={memorySpace.siteLink}
      />
      <ProjectDetails 
        siteImage={nationalParks.siteImage} 
        siteTitle={nationalParks.siteTitle}
        siteDesc={nationalParks.siteDesc}
        siteTech={nationalParks.siteTech}
        siteLink={nationalParks.siteLink}
      />
      <ProjectDetails 
        siteImage={crudBuddy.siteImage} 
        siteTitle={crudBuddy.siteTitle}
        siteDesc={crudBuddy.siteDesc}
        siteTech={crudBuddy.siteTech}
        siteLink={crudBuddy.siteLink}
      />
      <ProjectDetails 
        siteImage={apod.siteImage} 
        siteTitle={apod.siteTitle}
        siteDesc={apod.siteDesc}
        siteTech={apod.siteTech}
        siteLink={apod.siteLink}
      />
    </div>
  )
}
