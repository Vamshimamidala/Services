import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Adminslider = () => {
  return (
    <div className="admin-slider">
      <section>
        <ul className="slider-menu" >
          <li className="slider-item">
            <NavLink to="adminregister" className="slider-link">Register</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="addcaterogy" className="slider-link">Add caterogy</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="editcaterogy" className="slider-link">Edit and delete caterogy</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="addoffer" className="slider-link">Add offer</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="editoffer" className="slider-link">Edit and delete offers</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="subcat" className="slider-link">Sub caterogy</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="editsub" className="slider-link">Edit and delete sub caterogy</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="addservice" className="slider-link">Add service provider</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="editservice" className="slider-link">Edit & Delete service provider</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="" className="slider-link">user testing provider</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="" className="slider-link">Edit and delete user testing provider</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="feedback" className="slider-link">Delete Feed back</NavLink>
          </li>
          <li className="slider-item">
            <NavLink to="servicefeed" className="slider-link">Delete Service Feed back</NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Adminslider;
 