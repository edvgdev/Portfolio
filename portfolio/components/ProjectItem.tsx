import React from 'react'

interface Props {
    name: string;
}

const ProjectItem = (props: Props) => {
  return (
    <div className='project-item-container'>
        <div className='project-item-text-container'>
            <h1 className='hero-text'>{props.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui vestibulum justo ultricies 
                ornare eget et mi. Sed pretium lorem nec purus vehicula, sed fermentum erat ornare. Vivamus ac ligula
                 ut est volutpat feugiat. Nullam rhoncus lorem vitae vestibulum lobortis. Morbi ac faucibus lacus, eget 
                 interdum turpis. Fusce maximus, orci quis vehicula viverra, tortor odio tempor libero, quis euismod.
            </p>
            <div className='project-item-button-container'>
                <button className='hero-button'>Live Site</button>
                <button className='hero-button-outlined'>Git Repository</button>
            </div>
        </div>
        <div className='project-item-image-container'>
            Image
        </div>
    </div>

  )
}

export default ProjectItem
