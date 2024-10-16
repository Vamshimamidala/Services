import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import img from "./Images/admin.jpeg";

const Adminlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/sigup/login", { email, password })
            .then((res) => {
                if (res.data === "valid") {
                    navigate("/admindashboard");
                } else {
                    alert("Invalid username or password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="admin-login" > 
            
            <section className="breadcrumb-section" style={{backgroundColor:"red"}}>
                <div className="breadcrumb-container">
                    <img src={img} alt="Admin Login" className="breadcrumb-image" />
                     
                </div>
            </section>

          
            <section className="form-section" style={{backgroundColor:"gray"}}>
                <div className="form-container">
                    <form onSubmit={submit} className="login-form">
                        <div className="mb-3">
                            <input type="text" name="email" placeholder="Username" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <input type="submit" value="Admin Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Adminlogin;
