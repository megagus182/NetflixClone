import React from 'react';
import './HeroBanner.css';
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import SubHeader from '../SubHeader/SubHeader';

const HeroBanner = ( { backgroundImage, title, description, seccion, onViewChange, showContent = true } ) => {

  return (
    <section
      className="hero"
      style={{
        backgroundImage: showContent ? `url(${backgroundImage})` : "none",
        backgroundColor: showContent ? "transparent" : "#000"
      }}
    >
      <div className="overlay">
      <SubHeader 
      title = {seccion}
      onViewChange={onViewChange}
      />
      </div>
            {/* 👇 Solo si showContent está en true se muestra el contenido */}
      {showContent && (
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
      )}
    </section>
  );
};

export default HeroBanner;
