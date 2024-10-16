import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
import './App1.css';

const Feedbackform = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [ratesus, setRatesus] = useState("");
   
  const feedback = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/feedback", { name, phone, email, address, ratesus });
      alert("Feedback was sent");

      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setRatesus("");
    } catch (err) {
      alert("Failed to connect. Please try again later.");
    }
  };
  return (
    <div>
       

      <section className="service-section">
        <div className="container">
          <div className="row">
            

            <div className="col-md-6">
              <div className="service-form p-4 shadow-lg">
                <h5 className="mb-4">Feedback</h5>
                <form onSubmit={feedback}>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form-control p-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your number"
                      className="form-control p-3"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control p-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your address"
                      className="form-control p-3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Please provide your feedback"
                      className="form-control p-3"
                      value={ratesus}
                      onChange={(e) => setRatesus(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="submit"
                      className="btn btn-danger w-100"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

 

export default Feedbackform