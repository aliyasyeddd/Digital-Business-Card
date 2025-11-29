import React from 'react'
import instagram from '../assets/instagram.png'
import Facebook from '../assets/Facebook.png'
import twitter from '../assets/twitter.png'
import Github from '../assets/Github.png'


const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-icons'>
        <li><img src={twitter} alt="twitter logo" /></li>
        <li><img src={Facebook} alt="facebook logo" /></li>
        <li><img src={instagram} alt="instagram logo" /></li>
        <li><img src={Github} alt="github logo" /></li>
      </ul>
    </footer>
  )
}

export default Footer
