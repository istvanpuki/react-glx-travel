import './Footer.css'
import {Link} from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
            <div>
              <p>123 Acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className='phone'>
            <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />1-800-123-1234</h4>
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />trips@galaxy.com</h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>Lorem ipsum dolor, sit amet consectetur<br></br>
             adipisicing elit. Deserunt, unde ab! Necessitatibus<br></br>
             laudantium itaque beatae, veniam officia vero<br></br>
             sequi. Aut suscipit maiores provident possimus.
          </p>
          <div className='social'>
            <FaFacebook size={30} style={{color: '#ffffff', marginRight: '2rem'}} />
            <FaTwitter size={30} style={{color: '#ffffff', marginRight: '2rem'}} />
            <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '2rem'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer