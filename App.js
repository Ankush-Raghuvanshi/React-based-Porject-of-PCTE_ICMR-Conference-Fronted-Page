import React, { useState, useEffect } from "react";
import "./App.css";

const Navbar = ({ onRegisterClick }) => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#call-for-papers">Call for Papers</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#registration" onClick={onRegisterClick}>Registration</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Header = ({ onRegisterClick }) => {
  return (
    <header className="header">
      <div className="logo">13th ICMR - PCTE</div>
      <Navbar onRegisterClick={onRegisterClick} />
      <button className="register-btn" onClick={onRegisterClick}>Register Now</button>
    </header>
  );
};

const ImageSlider = () => {
  const images = [
    "/IMG2.jpg",
    "/IMG4.jpg",
    "/IMG1.jpg",
    "/IMG3.jpg",
    "/IMG2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="Conference" className="slider-image" />
    </div>
  );
};

const HeroSection = ({ onRegisterClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>13th International Multidisciplinary Conference</h1>
        <p>March 20–22, 2025 | PCTE Group of Institutes, Ludhiana.
          <br></br>
          <br></br><i>        Created By: Anksuh Raghuvanshi & Madhav Mittal
        <br></br>
        <br></br>
        </i>
        MCA Batch 2023 - 2025
        </p>
        <button className="cta-btn" onClick={onRegisterClick}>Register Now</button>
      </div>
    </section>
  );
};

const RegistrationForm = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Conference Registration</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Phone:</label>
          <input type="tel" required />
          <label>Affiliation:</label>
          <input type="text" required />
          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleClose = () => {
    setShowRegistration(false);
  };

  return (
    <div>
      <Header onRegisterClick={handleRegisterClick} />
      <ImageSlider />
      <HeroSection onRegisterClick={handleRegisterClick} />
      {showRegistration && <RegistrationForm onClose={handleClose} />}
    </div>
  );
};

export default App;
