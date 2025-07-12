import React, {useEffect, useState} from 'react';
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
import './Series.css'
import HeroBanner from '../../components/heroBanner/HeroBanner';

const Series = () => {

  const [animeSeries, setAnimeSeries] = useState([]);
  const [koreanDramas, setKoreanDramas] = useState([]);
  const [spanishSeries, setSpanishSeries] = useState([]);
  const [awardSeries, setAwardSeries] = useState([]);
  const [womenSeries, setWomenSeries] = useState([]);
  const [americanSeries, setAmericanSeries] = useState([]);
  const [miniseries, setMiniseries] = useState([]);
  const [epicWorldSeries, setEpicWoroldSeries] = useState([]);

const backgroundImage = "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg";
const title = "Stranger Things";
const description = "Un grupo de niños en un pequeño pueblo descubre un oscuro experimento del gobierno, fuerzas sobrenaturales y una niña misteriosa. ¿Listos para el viaje al Upside Down?";


  useEffect(() => {
    getAnimeSeries().then(setAnimeSeries);
    getKoreanDramas().then(setKoreanDramas);
    getSpanishSeries().then(setSpanishSeries);
    getAwardWinningSeries().then(setAwardSeries);
    getWomenLedSeries().then(setWomenSeries);
    getAmericanDramaSeries().then(setAmericanSeries);
    getMiniseries().then(setMiniseries);
    getEpicWorldsSeries().then(setEpicWoroldSeries);
  }, []);
  return (
      <div className="series-container">
        <HeroBanner
        backgroundImage={backgroundImage}
        title={title}
        description={description}/>
      <MovieRow title="Series de anime" movies={animeSeries} />
      <MovieRow title="Series dramáticas coreanas" movies={koreanDramas} />
      <MovieRow title="Series en español " movies={spanishSeries} />
      <MovieRow title="Series premiadas" movies={awardSeries} />
      <MovieRow title="Series con mujeres protagonistas" movies={womenSeries} />
      <MovieRow title="Series dramáticas de EE. UU." movies={americanSeries} />
      <MovieRow title="Miniseries" movies={miniseries} />
      <MovieRow title="Mundos épicos" movies={epicWorldSeries} />
    </div>
    );
};

export default Series;