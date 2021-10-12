import React from 'react'
import ProjectDetails from './ProjectDetails'
import "../styles/components/ProjectsContent.css"

export default function ProjectsContent() {
  return (
    <div className="projectsContentArea">
      <ProjectDetails />
      <ProjectDetails />
      <ProjectDetails />
    </div>
  )
}
