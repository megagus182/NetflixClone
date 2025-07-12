import React from 'react';
import './HeroBanner.css';
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";

const HeroBanner = ( { backgroundImage, title, description } ) => {

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-description">
          {description}
        </p>
        <div className="hero-buttons">
          <button className="btn play"><FaPlayCircle /> Reproducir</button>
          <button className="btn info"><FaInfoCircle /> Más información</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
