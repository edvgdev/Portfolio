import TypeWriteEffect from '@/helper/TypeWriteEffect'
import React from 'react'
import hero from '../public/hero.png'
import Image from 'next/image'

const Hero = () => {
  return (
      <div className='hero-container'>
        <div className='hero-content'>
            <h1 className='hero-text'>Hello! I am <span>Edison</span>, </h1>
            <TypeWriteEffect/>
            <button className='hero-button'>Download CV</button>
        </div>

        <div className="hero-image-wrapper">
            <Image className="hero-image" src={hero} alt="logo" />
            <div className="hero-circle"></div>
        </div>
      </div>
  )
}

export default Hero
