import React from 'react';
import './App.css';
import img from './Images/image.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="head">
      <div className="header-container">
        <div className="logo">
          <img src={img} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li> */}
            <li>
              <NavLink to="/feedbackform" activeClassName="active">Feedback</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
