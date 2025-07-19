import React from 'react'
import "./Hero.css"

const Hero = ({text}) => {
  return (
    <div className='hero'>{text}</div>
  )
}

export default Hero