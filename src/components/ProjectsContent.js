import React from 'react'
import ProjectDetails from './ProjectDetails'
import "../styles/components/ProjectsContent.css"
import siteData from "../functions/siteData"

export default function ProjectsContent() {
  const { memorySpace, crudBuddy, nationalParks } = siteData();
  return (
    <div className="projectsContentArea">
      <ProjectDetails 
        siteImage={memorySpace.siteImage} 
        siteTitle={memorySpace.siteTitle}
        siteDesc={memorySpace.siteDesc}
        siteTech={memorySpace.siteTech}
        siteLink={memorySpace.siteLink}
      />
      <ProjectDetails 
        siteImage={crudBuddy.siteImage} 
        siteTitle={crudBuddy.siteTitle}
        siteDesc={crudBuddy.siteDesc}
        siteTech={crudBuddy.siteTech}
        siteLink={crudBuddy.siteLink}
      />
      <ProjectDetails 
        siteImage={nationalParks.siteImage} 
        siteTitle={nationalParks.siteTitle}
        siteDesc={nationalParks.siteDesc}
        siteTech={nationalParks.siteTech}
        siteLink={nationalParks.siteLink}
      />
    </div>
  )
}
