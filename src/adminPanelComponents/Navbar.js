import React from 'react'
import Logo from "../assets/images/logo.png";
import CardComponent from './CardComponent';
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar" >
          
          <h1 style={{fontWeight:'bolder',color:'#fff'}}>Admin Dashboard</h1>
        </nav>
        
        
      </header>
      
    </div>
  )
}

export default Navbar
