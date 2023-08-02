import React from 'react';
import './Services.css';
import Ingrijire from '../../assets/Ingrijire.png';
import Dializa from '../../assets/Dializa.png';
import Transport from '../../assets/Transport.png';
import Colectiv from '../../assets/Colectiv.png';

const Services = () => {
  return (
    <div className='dacmed__services section__pading' id='servicii'>
    <div className='dacmed__services-content'>
      <div className='dacmed__services-content_tab'>
        <img src={Ingrijire} alt="ingrijire" />
        <h2>Ingrijiri la domiciliu</h2>
        <p>Tratamentele medicale efectuate la domiciliu, asigura confortul și siguranța pacienților, fiind important pentru pacienții vârstnici, acestia fiind mult mai sensibili la schimbarile de mediu.</p>
      </div>
      {/* <div className='dacmed__services-content_tab'>
        <img src={Dializa} alt="dializa" />
        <h2>Transport la Centrul de Dializa</h2>
        <p>In colaborare cu centrele de dializa, asiguram transportul în deplina siguranță a pacienților.In colaborare cu centrele de dializa, asiguram transportul în deplina siguranță a pacienților.</p>
      </div>
      </div>
      <div className='dacmed__services-content'>
      <div className='dacmed__services-content_tab'>
        <img src={Transport} alt="transport" />
        <h2>Transport intern/extern</h2>
        <p>Rapiditatea, flexibilitatea și confortul pacientului, sunt elementele care caracterizează echipa DACMed.</p>
      </div> */}
      <div className='dacmed__services-content_tab'>
        <img src={Colectiv} alt="colectiv" />
        <h2>Asistenta medicala colectiva</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      </div>
    </div>
  </div>
  )
}

export default Services