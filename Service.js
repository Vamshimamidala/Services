import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App1.css";

const Service = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [subcat, setSubcat] = useState("");
  const [data, setData] = useState([]);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { subname } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/service/${subname}`);
        setData(res.data);
        setDisplayedServices(res.data.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch data", err);
        alert("Failed to load services. Please try again.");
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 5) % data.length;
        setDisplayedServices(data.slice(nextIndex, nextIndex + 5));
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [subname, data]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/subcat/${subname}`)
      .then((res) => {
        setSubcat(res.data[0].des);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subname]);

  const feedback = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/servicefeed", {
        name,
        phone,
        email,
        address,
      });
      alert("Service was sent");
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
    } catch (err) {
      alert("Failed to connect. Please try again later.");
    }
  };

  return (
    <div>
      <section className="subcat-section">
        <div className="container text-center">
          <h2 className="subname mb-4">{subname}</h2>
          <p className="lead">{subcat}</p>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="service-list">
                {displayedServices.map((ser) => (
                  <div key={ser.servicename} className="service-item p-3 mb-3">
                    <h6>
                      <span>Name:</span>
                      {ser.servicename}
                    </h6>
                    <p>
                      <span>Address:</span> {ser.serivceaddress}
                    </p>
                    <p>
                      <span>Phone Number:</span>
                      {ser.phone}
                    </p>
                    <p>
                      <span>Description:</span>
                      {ser.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-form p-4 shadow-lg">
                <h5 className="mb-4">Book a Service</h5>
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

export default Service;
