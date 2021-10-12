import React from 'react'
import "../styles/components/ProjectsContent.css"
import Footer from "../components/shared/Footer"
import Header from '../components/shared/Header'
import ProjectsContent from '../components/ProjectsContent'

export default function Projects() {
  return (
    <div className="projectsContainer">
      <Header />
      <ProjectsContent />
      <Footer />
    </div>
  )
}
