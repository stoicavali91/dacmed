import React from 'react';
import './Reviews.css';
import Star from '../../assets/Star.svg';
import Avatar from '../../assets/Avatar.svg';
const Reviews = () => {
  return (
    <div className='dacmed__reviews section__pading' id='standarde'>
      <div className='dacmed__reviews-title'>
        <h1>Ce spun pacientii nostrii</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h4>Ana-Maria Pop</h4>
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
          <p>În cazul în care clienții necesită administrarea medicamentelor, îngrijitorii trebuie să respecte un standard strict de administrare a acestora.</p>
          <img src={Avatar} alt="avatar" className='avatar'/>
          <h4>Ana-Maria Pop</h4>
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
          <p>Ele includ implementarea unor protocoale de siguranță, cum ar fi verificarea identității pacienților și administrarea.Ele includ implementarea unor protocoale de siguranță, cum ar fi verificarea identității pacienților și administrarea.
          </p>
          <img src={Avatar} alt="avatar" className='avatar'/>
          <h4>Ana-Maria Pop</h4>
          <h4>Client</h4>
        </div>
      </div>
    </div>
  )
}

export default Reviews