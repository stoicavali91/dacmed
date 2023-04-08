import React from 'react';
import './Prices.css';
import Check from '../../assets/Check.svg';

const Prices = () => {
  return (

    <div className='dacmed__prices section__pading' id='preturi'>
      <div className='dacmed__prices-title'>
        <h1>Preturile noastre</h1>
        <p>Pachetul nostru de bază oferă servicii personalizate și de înaltă calitate, inclusiv îngrijire personală, administrarea medicamentelor și asistența în activitățile zilnice, pentru a satisface nevoile de îngrijire la domiciliu ale pacienților noștri.</p>
      </div>
      <div className='dacmed__prices-content'>
        <div className='dacmed__prices-content_table'>
          <div className='dacemed__prices-content_table-title'>
            <h3>Orice injectie</h3>
            <h1>70 lei</h1>
            <p>Puteti alege oricare din urmatoarele:</p>
          </div>
          <div className='dacemed__prices-content_table-checks'>
              <div className='checked-list'>
                <img src={Check} alt="check" />
                <p>Injecție intramusculară</p>
              </div>
              <div className='checked-list'>
                <img src={Check} alt="check" />
                <p>Injecție subcutanată</p>
              </div>
              <div className='checked-list'>
                <img src={Check} alt="check" />
                <p>Injecție intravenoasă</p>
              </div>
             
              <div className='checked-list'>
                <h3>* Adresați-vă medicului pentru recomandări înainte de administrare.</h3>
              </div>
          </div>
          <div className='checked-list-button'>
            {/* <button type='button' className='button1' href="#contact">Contact</button> */}
            <a href="#contact" className='button1'>Contact</a>
            
          </div>
        </div>

        <div className='dacmed__prices-content_table'>
          <div className='dacemed__prices-content_table-title'>
            <h3>Orice perfuzie</h3>
            <h1>250 lei</h1>
            <p>Puteti alege oricare din urmatoarele:</p>
          </div>
          <div className='dacemed__prices-content_table-checks'>
              
              <div className='checked-list'>
                <img src={Check} alt="check" />
                <p>Perfuzie Hidratare cu Vitamine B1, B6, Vit. C</p>
              </div>
              <div className='checked-list'>
                <img src={Check} alt="check" />
                <p>Perfuzie Antimahmureala</p>
              </div>
              
              <div className='checked-list'>
                <img src={Check} alt="check" />
                <p>Perfuzie medicație cu prescriptie 250/500 ml</p>
              </div>
              <div className='checked-list'>
                <h3>* Adresați-vă medicului pentru recomandări înainte de administrare.</h3>
              </div>
          </div>
          <div className='checked-list-button'>
            {/* <button type='button' className='button1'>Contact</button> */}
            <a href="#contact" className='button1'>Contact</a>
          </div>
        </div>


      
        
    </div>
  </div>
  )
}

export default Prices