import React, { useEffect, useState } from 'react';
import './App1.css';
import img1 from "./Images/img1.webp";
import img2 from "./Images/img2.webp";
import img3 from "./Images/img3.webp";
import img4 from "./Images/img4.webp";
import res from "./Images/res.png";
import edu from "./Images/edu.jpeg";
import hosp from "./Images/hosp.jpeg";
import sal from "./Images/sal.png";
import rent from "./Images/rent.png";
import home from "./Images/home.jpeg";
import hotel from "./Images/hotel.jpeg";
import { NavLink } from 'react-router-dom';
import offerImg from "./Images/wall.webp";
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [catt, setCatt] = useState([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0); // for the offer section
  const [currentIndex, setCurrentIndex] = useState(0); // for carousel

  const carouselImages = [img1, img2, img3, img4];

  const categoryImageMap = {
    "Restaurant": res,
    "Education": edu,
    "Hospital": hosp,
    "Salon": sal,
    "Rent": rent,
    "Home": home,
    "Hotel": hotel,
  };

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Fetching offers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/addoffer");
        setData(res.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
        alert("Failed to load offers. Please try again.");
      }
    };
    fetchData();
  }, []);

  // Fetching categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/addcat`);
        setCatt(response.data);
      } catch (err) {
        alert("Error fetching categories");
      }
    };
    fetchCategories();
  }, []);

  // Offer change interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [data.length]);

  const currentOffer = data[currentOfferIndex]; // current offer to display

  return (
    <div>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                >
                  {index === currentIndex && <img src={img} alt={`slide-${index}`} />}
                </div>
              ))}
              <button
                className="prev"
                onClick={() =>
                  setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
                }
              >
                Prev
              </button>
              <button
                className="next"
                onClick={() =>
                  setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
                }
              >
                Next
              </button>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container icon">
          <div className="row">
            {catt.map((cat, index) => (
              <div className="col-md-2" key={index}>
                <ul>
                  <li>
                    <NavLink to={`/catdetails/${cat.name}`} className="text-decoration-none">
                      <span>
                        <img
                          src={categoryImageMap[cat.name] || res} // default image   
                          alt={cat.name}
                        />
                        <h5 className="card-title text-primary">{cat.name}</h5>
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offer1">
        <div className="container offer">
          <div className="row">
            <div className="col-md-6 offer-details">
              {data.length > 0 ? (
                <div key={currentOfferIndex} className="offer-content animated-offer">
                  <p className="offer-text">
                    <span>Offer Name:</span> {currentOffer?.offername}
                  </p>
                  <p className="offer-text">
                    <span>Coupon Code:</span> {currentOffer?.couponcode}
                  </p>
                </div>
              ) : (
                <p className="offer-text">Loading offers...</p>
              )}
            </div>
            <div className="col-md-6">
              <img src={offerImg} alt="Offer" className="offer-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
