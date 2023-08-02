import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/Logo.png';
import { useRef } from 'react';

const Menu = () =>(
  <>
          <p><a href="#standarde">Standardele noastre</a></p>
          <p><a href="#beneficii">Beneficii</a></p>
          <p><a href="#servicii">Servicii</a></p>
          <p><a href="#preturi">Preturi</a></p>
          <p><a href="#intrebari-frecvente">Intrebari frecvente</a></p>
  </>
);

const Navbar = () => {
  useEffect(()=>{
    document.addEventListener("click",handleClickOutside, true)
  },[]);
  const refOne = useRef(null);
  const handleClickOutside = (e) =>{
      if(!refOne.current.contains(e.target)){
        setToggleMenu(false)
      }
  }


  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='dacmed__navbar section__margin'>
      <div className='dacmed__navbar-logo'>
        <a href="#home"><img src={logo} alt="logo" /></a>
          
        </div>
      <div className='dacmed__navbar-links'>
        <div className='dacmed__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='dacmed__navbar-contact'>
        <a href="tel:+40736987433"><button type='button'>Suna Acum!</button></a>
        
      </div>
      <div className='dacmed__navbar-menu' ref={refOne}>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='dacmed__navbar-menu_container scale-up-center'>
            <div className='dacmed__navbar-container_links'>
              <Menu/>
              <div className='dacmed__navbar-menu_container_links-contact'>
              <a href="#contact"><button type='button' className='contact-button'>Contact</button></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar