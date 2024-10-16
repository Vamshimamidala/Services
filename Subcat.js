import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './App1.css';
const Subcatt = () => {
  const [subcat, setSubcat] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/subcat/${name}`)
      .then((res) => {
        setSubcat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <div className="addcat-details">
      <div className="container">
        <div className='back'>
        <div className="name-container">
          <h2 className="name-title">{name}</h2>
        </div>
        </div>
        <div className="subcat-list">
          {subcat.map((sub, index) => (
            <div key={index} className="subcat">
              <NavLink to={`/servicedetails/${sub.subname}`}>
                <p>{sub.subname}</p>
              </NavLink>
              <p>{sub.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcatt;
