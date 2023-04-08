import React, {useState} from 'react';
import './Questions.css';
import QArrow from '../../assets/QArrow.svg';

const Questions = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) =>{
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }

  const data = [
    {
      question:'1.Ce modalități de plată acceptați?',
      answer:'Plata serviciilor oferite se poate face atât numerar cat si cu cardul bancar.',
      open:true
    },
    {
      question:'2.Există vreo limitări privind vârsta sau starea de sănătate a pacienților pe care îi puteți trata?',
      answer:'Vârstă minima pentru a putea acorda tratamente de calitate este de 10 ani. ',
      open:false
    },
    {
      question:'3.Ce măsuri de precauție COVID-19 ați luat pentru a proteja pacienții?',
      answer:'Curățarea echipamentelor și a ustensilelor cu dezinfectanti de înaltă clasa, menținerea igienei și respectarea masurilor de asepsie și antisepsie.',
      open:false
    },
    {
      question:'4. Recoltati analize decontate de CNAS?',
      answer:'Analizele sunt recoltate si lucrate in regim de urgenta, din acest motiv nu se deconteaza de catre CNAS!',
      open:false
    },
    {
      question:'5.Oferiți servicii de urgență sau de îngrijire de urgență?',
      answer:'Se pot efectua îngrijiri de urgenta în functie de complexitatea cazului.',
      open:false
    }
  ];
  return (
    <div className='dacmed__questions section__pading' id='intrebari-frecvente'>
      <div className='dacmed__questions-title'>
        <h2>Intrebari frecvente</h2>
        <p>Dacă aveți alte întrebări sau neclarități, vă rugăm să ne contactați și vom fi bucuroși să vă ajutăm în orice fel posibil. </p>
      </div>
      <div className='dacmed__questions-accordion'>
        {data.map((item,i)=>(
          <div className='dacmed__questions-accordion_item' onClick={()=> toggle(i)}>
            <div className='dacmed__questions-accordion_item-text'>
              <div className='title' >
                <h3>{item.question}</h3>
              </div>
              <div className={selected === i ? 'answer show':'answer'}>
                <p>{item.answer}</p>
              </div>
            </div>
            <div className={selected === i ? 'dacmed__questions-accordion_item-image-up':'dacmed__questions-accordion_item-image-down'}>
              <img src={QArrow} alt="arrow" />
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Questions