import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'


const Nav = () => {
  return (
    <div className='navbar'>
    <div>
      <Image src={logo} alt='logo' width={180} height={120}/>
    </div>
    <div>
    <ul className='navlist'>
        <li> <a href="#">Home</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact Me</a></li>
    </ul>
    </div>
  </div>
  )
}

export default Nav
