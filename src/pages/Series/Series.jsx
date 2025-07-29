import React, { useEffect, useState } from 'react';
import {
  getAnimeSeries,
  getKoreanDramas,
  getSpanishSeries,
  getAwardWinningSeries,
  getWomenLedSeries,
  getAmericanDramaSeries,
  getMiniseries,
  getEpicWorldsSeries,
} from "../../services/tmdb";
import MovieRow from '../../components/movieRow/MovieRow';
import './Series.css';
import HeroBanner from '../../components/heroBanner/HeroBanner';

const Series = () => {
  const [animeSeries, setAnimeSeries] = useState([]);
  const [koreanDramas, setKoreanDramas] = useState([]);
  const [spanishSeries, setSpanishSeries] = useState([]);
  const [awardSeries, setAwardSeries] = useState([]);
  const [womenSeries, setWomenSeries] = useState([]);
  const [americanSeries, setAmericanSeries] = useState([]);
  const [miniseries, setMiniseries] = useState([]);
  const [epicWorldSeries, setEpicWorldSeries] = useState([]);
  const [showHeroContent, setShowHeroContent] = useState(true);

  const backgroundImage = "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg";
  const title = "Stranger Things";
  const description = "Un grupo de niños en un pequeño pueblo descubre un oscuro experimento del gobierno, fuerzas sobrenaturales y una niña misteriosa. ¿Listos para el viaje al Upside Down?";
  const seccion = "Series"

  // Función para filtrar los que tienen poster o fondo
  const filtrarConImagen = (lista) =>
    lista.filter(item => item.backdrop_path);

  useEffect(() => {
    getAnimeSeries().then(res => setAnimeSeries(filtrarConImagen(res)));
    getKoreanDramas().then(res => setKoreanDramas(filtrarConImagen(res)));
    getSpanishSeries().then(res => setSpanishSeries(filtrarConImagen(res)));
    getAwardWinningSeries().then(res => setAwardSeries(filtrarConImagen(res)));
    getWomenLedSeries().then(res => setWomenSeries(filtrarConImagen(res)));
    getAmericanDramaSeries().then(res => setAmericanSeries(filtrarConImagen(res)));
    getMiniseries().then(res => setMiniseries(filtrarConImagen(res)));
    getEpicWorldsSeries().then(res => setEpicWorldSeries(filtrarConImagen(res)));
  }, []);

  return (
    <div className="series-container">
      <HeroBanner
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        seccion={seccion}
        showContent={showHeroContent} 
        onViewChange={setShowHeroContent}
      />
      <MovieRow title="Series de anime" movies={animeSeries} />
      <MovieRow title="Series dramáticas coreanas" movies={koreanDramas} />
      <MovieRow title="Series en español" movies={spanishSeries} />
      <MovieRow title="Series premiadas" movies={awardSeries} />
      <MovieRow title="Series con mujeres protagonistas" movies={womenSeries} />
      <MovieRow title="Series dramáticas de EE. UU." movies={americanSeries} />
      <MovieRow title="Miniseries" movies={miniseries} />
      <MovieRow title="Mundos épicos" movies={epicWorldSeries} />
    </div>
  );
};

export default Series;
