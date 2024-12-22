import React from 'react'
import flutter from '../public/flutter.png';
import react from '../public/react.png';
import git from '../public/git.png';
import java from '../public/java.png';
import spring from '../public/spring.png';
import mysql from '../public/mysql.png';
import javascript from '../public/javascript.png';
import typescript from '../public/typescript.png';
import next from '../public/next.svg';
import Image from 'next/image'


const Skill = () => {
  return (
    
    <div className='skills-container'>
        <h1 className='hero-text'>MY SKILLS</h1>
        <div className='skills-icons'>
            <Image src={react} alt='logo' width={144} height={144}/>
            <Image src={next} alt='logo' width={144} height={144}/>
            <Image src={javascript} alt='logo' width={144} height={144}/>
            <Image src={typescript} alt='logo' width={144} height={144}/>
            <Image src={spring} alt='logo' width={144} height={144}/>
            <Image src={java} alt='logo' width={144} height={144}/>
            <Image src={flutter} alt='logo' width={144} height={144}/>
            <Image src={mysql} alt='logo' width={144} height={144}/>
            <Image src={git} alt='logo' width={144} height={144}/>

        </div>
    </div>
  )
}

export default Skill
