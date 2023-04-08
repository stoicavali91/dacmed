import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaGoogle } from 'react-icons/fa';
import FooterLogo from '../../assets/FooterLogo.png'


const Footer = () => {
  return (
    <div className='dacmed__footer section__pading'>
      
      <div className='dacmed__footer-section1'>
      <a href="#home"><img src={FooterLogo} alt="logo" /></a>
        <div>
          <a href="https://www.facebook.com/marius.stoica.7330" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
          <a href="https://www.facebook.com/marius.stoica.7330" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          <a href="https://www.facebook.com/marius.stoica.7330" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
          <a href="https://www.facebook.com/marius.stoica.7330" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><FaGoogle/></a>
        </div>
      </div>
      <div className='dacmed__footer-section2'>
        <p>© 2023 Relume. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </div>
  )
}

export default Footer