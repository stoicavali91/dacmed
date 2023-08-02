import React from 'react';
import './Hero.css';
import hero from '../../assets/Hero.png'

const Hero = () => {
  return (
    <div className='dacmed__hero section__pading' id='home'>
      <div className='dacmed__hero-content'>
        <h1>Drumul catre sanatate incepe cu noi!</h1>
        <p>Suntem o echipă de profesioniști dedicați sănătății și bunăstării dumneavoastră. Prin serviciile noastre medicale de înaltă calitate și experiența noastră vastă în domeniu, ne străduim să oferim îngrijire medicală de încredere și să construim relații de lungă durată cu pacienții noștri. Ne angajăm să fim partenerul dumneavoastră în eforturile de a vă menține sănătatea și a îmbunătăți calitatea vieții.</p>
        <div className='dacmed__hero-buttons'>
          
          <a href="#contact"><button type='button' className='contact-button'>Contact</button></a>
          <a href="#standarde"><button type='button' className='learn-button'>Afla mai multe</button></a>

          
        </div>
      </div>
      <div className='dacmed__hero-image'>
          <img src={hero} alt="hero" />
        </div>
    </div>
  )
}

export default Hero