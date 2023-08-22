import React from 'react';
import './Reviews.css';
import Star from '../../assets/Star.svg';
// import Avatar from '../../assets/Avatar.svg';
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
          <p>"Am făcut apel la serviciile de asistență medicală la domiciliu pentru mama mea și am fost extrem de mulțumită. Echipa a fost promptă, profesionistă și cu adevărat dedicată nevoilor pacientului. Recomand cu încredere!"</p>
          {/* <img src={Avatar} alt="avatar" className='avatar'/> */}
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
          <p>"Când tatăl meu a avut nevoie de îngrijiri medicale post-operatorii, serviciul de asistență medicală la domiciliu DacMed a fost o binecuvântare. Personalul instruit și atent ne-a asigurat că totul merge bine. Apreciem enorm devotamentul și profesionalismul lor."</p>
          {/* <img src={Avatar} alt="avatar" className='avatar'/> */}
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
          <p>"Colaborarea cu echipa DacMed a fost dincolo de așteptările mele. Au fost alături de familia mea în momente dificile, oferindu-ne suport și îngrijiri medicale de cea mai înaltă calitate. Le sunt profund recunoscătoare și îi recomand cu toată inima."
          </p>
          {/* <img src={Avatar} alt="avatar" className='avatar'/> */}
          <h4>Adriana</h4>
          <h4>Client</h4>
        </div>
      </div>
    </div>
  )
}

export default Reviews