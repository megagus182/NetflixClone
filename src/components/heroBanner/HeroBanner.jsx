import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">The Witcher</h1>
        <p className="hero-description">
          Un cazador de monstruos mutado lucha por encontrar su lugar en un mundo donde las personas suelen ser más perversas que las bestias.
        </p>
        <div className="hero-buttons">
          <button className="btn play">▶ Reproducir</button>
          <button className="btn info">ℹ Más información</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
