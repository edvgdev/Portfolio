import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='hero-text'>My Projects</h1>
      <ProjectItem name='Project 1'/>
      <ProjectItem name='Project 2'/>
    </div>
  )
}

export default Projects
