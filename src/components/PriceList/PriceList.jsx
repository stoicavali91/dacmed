import React, {useState} from 'react';
import './PriceList.css';
import QArrow from '../../assets/QArrow.svg';

const PriceList = () => {
  const [isActive1, setIsActive1] = useState(false);
  const handleClick1 = event => {  
    setIsActive1(current => !current);
  };

  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = event => {  
    setIsActive2(current => !current);
  };

  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = event => {  
    setIsActive3(current => !current);
  };

  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = event => {  
    setIsActive4(current => !current);
  };

  const [allList, setAllList] = useState(false);
  const handleClickAllTrue = event =>{
    setIsActive1(true);
    setIsActive2(true);
    setIsActive3(true);
    setIsActive4(true);
    setAllList(true);
  }
  const handleClickAllFalse = event =>{
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setAllList(false);
  }


  return (
    <div className='dacmed__list section__pading'>
      <div className='dacmed__list-grid'>
        <div className='dacmed__list-grid_cap-tabel'>
          <div className='dacmed__list-grid_title'>
            <h3>Tabel de preturi</h3>
            <p>Veti sti mereu costul serviciilor noastre.</p>
          </div>
          {/* <button type='button' onClick={() => { handleClick1(); handleClick2(); handleClick3(); handleClick4()}}>Vezi toata lista</button> */}
          <button type='button' onClick={()=> {allList ? handleClickAllFalse() : handleClickAllTrue()}}>Vezi toata lista</button>
        </div>
        <div className='dacmed__list-grid_cap-tabel'>
          <h3>Servicii</h3>
          <h3>Pret</h3>
        </div>
        <div className='dacmed__background-gray' onClick={handleClick1}>
          <div className='dacmed__list-grid_section' >
            <img src={QArrow} alt="arrow" className={isActive1 ? 'dacmed__list-grid_item-image-upx' : 'dacmed__list-grid_item-image-downx'}/>
            <h3>Sonda urinara</h3>
          </div>
        </div>



      <div className={isActive1 ? 'answer show' : 'answer'}>
        <div className='dacmed__list-grid_item'>
          <h3>Montare sondă vezicală femei</h3>
          <p>150lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Montare sondă vezicală barbati</h3>
          <p>250lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Scos sonda</h3>
          <p>100lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Schimbat punga urinara</h3>
          <p>50lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Consult verificare sondă urinară</h3>
          <p>50lei</p>
        </div>
        </div>

        <div className='dacmed__background-gray' onClick={handleClick2}>
          <div className='dacmed__list-grid_section'>
            <img src={QArrow} alt="arrow" className={isActive2 ? 'dacmed__list-grid_item-image-upx' : 'dacmed__list-grid_item-image-downx'}/>
            <h3>Recoltare analize (procesarea de catre laborator se taxeaza separat)</h3>
          </div>
        </div>


        <div className={isActive2 ? 'answer show' : 'answer'}>
        <div className='dacmed__list-grid_item'>
          <h3>Recoltare venoasa</h3>
          <p>70lei</p>
        </div>
        </div>
        <div className='dacmed__background-gray' onClick={handleClick3}>
          <div className='dacmed__list-grid_section'>
            <img src={QArrow} alt="arrow" className={isActive3 ? 'dacmed__list-grid_item-image-upx' : 'dacmed__list-grid_item-image-downx'}/>
            <h3>Transport</h3>
          </div>
        </div>
        <div className={isActive3 ? 'answer show' : 'answer'}>
        <div className='dacmed__list-grid_item'>
          <h3>Transport asistat in Bucuresti cu ambulanta (se adauga o taxa de 10lei/etaj la blocuri fara lift)</h3>
          <p>250lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Transport asistat Ilfov + restul Romaniei (se adauga o taxa de 10lei/etaj la blocuri fara lift)</h3>
          <p>300lei + 3lei/km</p>
        </div>
        </div>
        <div className='dacmed__background-gray' onClick={handleClick4}>
          <div className='dacmed__list-grid_section'>
            <img src={QArrow} alt="arrow" className={isActive4 ? 'dacmed__list-grid_item-image-upx' : 'dacmed__list-grid_item-image-downx'}/>
            <h3>Alte servicii</h3>
          </div>
        </div>
        <div className={isActive4 ? 'answer show' : 'answer'}>
        <div className='dacmed__list-grid_item'>
          <h3>Organizare medicamente pe saptamana</h3>
          <p>50lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Clisma evacuatorie</h3>
          <p>100lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Masurare functii vitale</h3>
          <p>50lei</p>
        </div>
        <div className='dacmed__list-grid_item'>
          <h3>Ingrijire plagi/Schimbarea pansamentului dupa operatie</h3>
          <p>100lei</p>
        </div>
        <div className='dacmed__list-grid_item no_border'>
          <h3>Escară Gradul I, II, III, IV</h3>
          <p>150lei</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PriceList