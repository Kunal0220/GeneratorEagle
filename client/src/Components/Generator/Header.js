import React from 'react';
import Logo from '../assets/logo.png';
import './Header.css';
import Line from './Line';

export default function Header() {
  return (
     <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Generator Eagle Logo" />
      </div>
      <div className="title-container">
      <pre>
        <h1 className="title">Generator Eagle</h1>
        </pre>
      </div>
    </div>
   
  );
}
