import React from 'react';
import './navbar.css';
import logo from  '../../assets/logov2.svg';


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="zupa__navbar">
        <div className="zupa__navbar-links">
          <div className="zupa__navbar-links_logo">
            <img src={logo} alt="logo" fill="pink" />
          </div>
        </div>
        <div className="zupa__navbar-links_container">
          <Link to="/home"><p>Services</p></Link>
          <Link to="/cases"><p>Contact</p></Link>
            </div>
    </div>
  )
}

export default Navbar