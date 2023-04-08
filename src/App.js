import React from 'react';
import { Navbar, Hero, Standards, Benefits, Services, Reviews, Prices, PriceList, Questions, Contact, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='app__navbar'>
        <Navbar />
      </div>
      <Hero />
      <Standards/>
      <Benefits/>
      <Services/>
      <Prices/>
      <PriceList/>
      <Reviews/>
      <Questions/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App