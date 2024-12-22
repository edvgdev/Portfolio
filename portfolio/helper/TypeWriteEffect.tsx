import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a Fullstack Developer.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Flutter Developer.',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='hero-text'
      repeat={Infinity}
    />
  )
}

export default TypeWriteEffect
