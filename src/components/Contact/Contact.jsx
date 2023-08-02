import React from 'react';
import './Contact.css';
import Email from '../../assets/email.svg';
import Phone from '../../assets/phone.svg';
import Location from '../../assets/location.svg';


const Contact = () => {
  return (
    <div className='dacmed__contact section__pading' id="contact">
      <div className='dacmed__contact-container'>
        <div className='dacmed__contact-item'>
          <a href="mailto:dacmed.contact@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Email} alt="email" /></a>
          <h3>Email</h3>
          <p>Trimite-ne un email</p>
          <a href="mailto:dacmed.contact@gmail.com" target="_blank" rel="noopener noreferrer">dacmed.contact@gmail.com</a>
        </div>
        <div className='dacmed__contact-item'>
          <a href="tel:+40726390146"><img src={Phone} alt="phone" /></a>
          <h3>Telefon</h3>
          <p>Apeleaza la numarul:</p>
          <a href="tel:+40726390146">+40736987433</a>
        </div>
        <div className='dacmed__contact-item'>
          <a href="https://goo.gl/maps/549AoAeEAMP6LBQX7" target="_blank" rel="noopener noreferrer"><img src={Location} alt="location"/></a>
          <h3>Adresa noastra este:</h3>
          <p>Adresa noastra este:</p>
          <a href="https://goo.gl/maps/549AoAeEAMP6LBQX7" target="_blank" rel="noopener noreferrer">Bucuresti</a>
        </div>
      </div>
    </div>
  )
}

export default Contact