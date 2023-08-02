import React from 'react';
import './Benefits.css';
import Marius from '../../assets/marius.jpeg'

const Benefits = () => {
  return (
    <div className='dacmed__benefits section__pading' id='beneficii'>
      <div className='dacmed__benefits-title'>
        <h1>Suntem alaturi de dumneavoastra in momentele care conteaza</h1>
        <p>În general, standardele medicale sunt esențiale pentru a asigura un mediu sigur și sănătos pentru clienții unei afaceri de îngrijiri la domiciliu și pentru a asigura că aceștia primesc cele mai bune servicii posibile.</p>
      </div>
      <div className='dacmed__benefits-content'>
        <div className='dacmed__benefits-content_tab'>
          <div>
            <h2>Accesibilitate</h2>
            <p>Serviciile medicale la domiciliu sunt, de asemenea, o opțiune excelentă pentru pacienții care au dificultăți în a se deplasa sau care locuiesc în zone izolate sau rurale unde accesul la serviciile medicale poate fi limitat. Astfel, serviciile medicale la domiciliu oferă pacienților accesibilitate la serviciile medicale de care au nevoie, indiferent de locația lor.</p>
          </div>
          <div>
            <h2>Reducerea riscului de infectie</h2>
            <p> În spitale și centre de îngrijire, există un risc crescut de infecții nosocomiale, adică infecții dobândite în timpul spitalizării. Prin utilizarea serviciilor medicale la domiciliu, pacienții pot evita acest risc și pot primi îngrijire medicală personalizată într-un mediu mai sigur și mai controlat.</p>
          </div>
          <div>
            <h2>Economisirea timpului si a costurilor</h2>
            <p>Serviciile medicale la domiciliu pot fi mai economice decât spitalizarea și pot ajuta la economisirea timpului și a costurilor asociate cu deplasarea la un spital sau la un centru de îngrijire. De asemenea, acestea pot fi mai eficiente din punct de vedere al timpului, întrucât pacienții nu trebuie să aștepte într-o sală de așteptare sau să se deplaseze la un alt loc pentru a primi îngrijirea medicală de care au nevoie.</p>
          </div>
        </div>
        <div className='dacmed__benefits-content_image'>
          <img src={Marius} alt="marius" />
        </div>
      </div>
    </div>
  )
}

export default Benefits