
import instagram from '../assets/instagram.png'
import Facebook from '../assets/Facebook.png'
import twitter from '../assets/twitter.png'
import Github from '../assets/Github.png'


const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-icons'>
        <li><img src={twitter} alt="twitter logo" className='icons twitter' /></li>
        <li><img src={Facebook} alt="facebook logo" className='icons facebook' /></li>
        <li><img src={instagram} alt="instagram logo" className='icons instagram'/></li>
        <li><img src={Github} alt="github logo" className='icons github'/></li>
      </ul>
    </footer>
  )
}

export default Footer
