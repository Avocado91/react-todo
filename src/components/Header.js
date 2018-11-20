import React from 'react';
import ReactLogo from './../images/react.png'; //logo

const Header = () => (
  <div className='header'>
    <img className='header__logo' src={ReactLogo} alt='React logo'></img>
    <h1 className='header__title'>React To Do</h1>
  </div>
)

export default Header;