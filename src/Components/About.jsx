import React from 'react'
import Profile from '../assets/Aliya.jpg'

const About = () => {
  return (
    <div>
      <img className='profile-pic' src={Profile} alt="Aliya Profile" />
      <h1 className='profile-name'>Aliya Syed</h1>
    </div>
  )
}

export default About
