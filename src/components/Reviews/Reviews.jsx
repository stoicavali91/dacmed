import React from 'react';
import './Reviews.css';
import Star from '../../assets/Star.svg';
import Avatar from '../../assets/Avatar.svg';
const Reviews = () => {
  return (
    <div className='dacmed__reviews section__pading' id='standarde'>
      <div className='dacmed__reviews-title'>
        <h1>Ce spun pacientii nostrii</h1>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>
      <div className='dacmed__reviews-content'>
        <div className='dacmed__reviews-content_tab'>
          <div className='dacmed__star'>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
          </div>
          <p>Personalul medical are pregătirea și cunoștințele necesare pentru a furniza servicii de calitate.</p>
          <img src={Avatar} alt="avatar" className='avatar'/>
          <h4>Ana-Maria R.</h4>
          <h4>Client</h4>
        </div>
        <div className='dacmed__reviews-content_tab'>
        <div className='dacmed__star'>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
          </div>
          <p>Am apelat la serviciile lor pentru administrarea unei perfuzii. Asistentul a fost foarte atent la nevoile mele. Ma declar multumit de serviciile prestate!</p>
          <img src={Avatar} alt="avatar" className='avatar'/>
          <h4>Valentin S.</h4>
          <h4>Client</h4>
        </div>
        <div className='dacmed__reviews-content_tab'>
        <div className='dacmed__star'>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/>
          </div>
          <p>Aceasta firma m-a ajutat de multe ori sa scap de starile mele de rau. Ofera si consiliere psihologica, deoarece nu sunt prea intreaga la minte!
          </p>
          <img src={Avatar} alt="avatar" className='avatar'/>
          <h4>Adriana</h4>
          <h4>Client</h4>
        </div>
      </div>
    </div>
  )
}

export default Reviews