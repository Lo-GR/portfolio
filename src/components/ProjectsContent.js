import React from 'react'
import ProjectDetails from './ProjectDetails'
import "../styles/components/ProjectsContent.css"
import siteData from "../functions/siteData"
//siteImage, siteTitle, siteDesc, siteTech
export default function ProjectsContent() {
  const { memorySpace } = siteData();
  return (
    <div className="projectsContentArea">
      <ProjectDetails 
        siteImage={memorySpace.siteImage} 
        siteTitle={memorySpace.siteTitle}
        siteDesc={memorySpace.siteDesc}
        siteTech={memorySpace.siteTech}
      />
      <ProjectDetails />
      <ProjectDetails />
    </div>
  )
}
