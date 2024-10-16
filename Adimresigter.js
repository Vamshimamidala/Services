import React, { useState } from 'react';
import axios from "axios";
import './App.css';
 
const Adimregister = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [address, setAddress] = useState("");
   
   const addStudent = (e) => {
       e.preventDefault();
       axios.post("http://localhost:4000/sigup", { name, phone, email, password, address })
        .then((res) => {
           alert("User data added");
        })
        .catch((err) => {
           alert("Failed to add data");
        });
   }

   return (
     <div className="admin-register">
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 my-4'>
                        <h1 className='text-center'>Admin Register</h1>
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <form onSubmit={addStudent} className="register-form">
                            <div className='mb-3'>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Name' 
                                    className='form-control input-field' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className='mb-3'>
                                <input 
                                    type='text' 
                                    name='phone' 
                                    placeholder='Phone' 
                                    className='form-control input-field' 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                            </div>
                            <div className='mb-3'>
                                <input 
                                    type='text' 
                                    name='email' 
                                    placeholder='Email' 
                                    className='form-control input-field' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <div className='mb-3'>
                                <input 
                                    type='password' 
                                    name='password' 
                                    placeholder='Password' 
                                    className='form-control input-field' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <div className='mb-3'>
                                <input 
                                    type='text' 
                                    name='address' 
                                    placeholder='Address' 
                                    className='form-control input-field' 
                                    value={address} 
                                    onChange={(e) => setAddress(e.target.value)} 
                                />
                            </div>
                            <div className='text-center'>
                                <input type='submit' value="Register" className='btn btn-success register-btn' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     </div>
   );
}

export default Adimregister;
