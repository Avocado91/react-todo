import React from 'react';
import ReactLogo from './../images/react.png'; //logo

const Header = () => (
  <div>
    <img src={ReactLogo} alt='React logo'></img>
    <h1>React To Do</h1>
  </div>
)

export default Header;