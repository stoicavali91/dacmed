import React from 'react';
import './Standards.css';
import Calitate from '../../assets/Calitate.png';
import Medicamente from '../../assets/Medicamente.png';
import Siguranta from '../../assets/Siguranta.png';
const Standards = () => {
  return (
    <div className='dacmed__standards section__pading' id='standarde'>
      <div className='dacmed__standards-content'>
        <div className='dacmed__standards-content_tab'>
          <img src={Calitate} alt="calitate" />
          <h2>Standarde de calitate a serviciilor</h2>
          <p>Personalul medical are pregătirea și cunoștințele necesare pentru a furniza servicii de calitate. Dezvoltarea și implementarea unor protocoale de lucru și proceduri standardizate asigura furnizarea serviciilor medicale în mod consistent și cu acuratețe.</p>
        </div>
        <div className='dacmed__standards-content_tab'>
          <img src={Medicamente} alt="medicamente" />
          <h2>Standardul de administrare a medicamentelor</h2>
          <p>În cazul în care clienții necesită administrarea medicamentelor, îngrijitorii trebuie să respecte un standard strict de administrare a acestora. Acest lucru include verificarea cu atenție a prescripțiilor medicale, pregătirea corectă a dozelor și monitorizarea atentă a efectelor secundare.</p>
        </div>
        <div className='dacmed__standards-content_tab'>
          <img src={Siguranta} alt="siguranta" />
          <h2>Standarde de siguranta a pacientului</h2>
          <p>Ele includ implementarea unor protocoale de siguranță, cum ar fi verificarea identității pacienților și administrarea medicamentelor în mod corect, precum și asigurarea unui mediu sigur și curat în care să se desfășoare tratamentul medical</p>
        </div>
      </div>
    </div>
  )
}

export default Standards