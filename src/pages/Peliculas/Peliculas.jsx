import React, { useState, useEffect } from "react";
import "./Peliculas.css";
import {
  getNowPlaying,
  getAnimeSeries,
  getKoreanDramas,
  getSpanishSeries,
  getAwardWinningSeries,
  getWomenLedSeries,
  getAmericanDramaSeries,
  getMiniseries,
  getDocumentaries,
  getEpicWorldsSeries,
  getRealityShows,
} from "../../services/tmdb";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import MovieRow from "../../components/movieRow/MovieRow";
import Top10Row from "../../components/topTenRow/TopTenRow";

const Peliculas = () => {
  const [loNuevoEnNetflix, setLoNuevoEnNetflix] = useState([]);
  const [animeSeries, setAnimeSeries] = useState([]);
  const [koreanDramas, setKoreanDramas] = useState([]);
  const [spanishSeries, setSpanishSeries] = useState([]);
  const [awardSeries, setAwardSeries] = useState([]);
  const [womenSeries, setWomenSeries] = useState([]);
  const [americanSeries, setAmericanSeries] = useState([]);
  const [miniseries, setMiniseries] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [epicWorldSeries, setEpicWoroldSeries] = useState([]);
  const [realityShows, setRealityShows] = useState([]);

  const backgroundImage =
    "https://image.tmdb.org/t/p/original/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg";
  const title = "The Irishman";
  const description =
    "Frank Sheeran, veterano de guerra convertido en sicario, recuerda los secretos que guardó sobre el crimen organizado. Una historia épica de lealtad, traición y poder.";

  useEffect(() => {
    getNowPlaying().then(setLoNuevoEnNetflix);
    getAnimeSeries().then(setAnimeSeries);
    getKoreanDramas().then(setKoreanDramas);
    getSpanishSeries().then(setSpanishSeries);
    getAwardWinningSeries().then(setAwardSeries);
    getWomenLedSeries().then(setWomenSeries);
    getAmericanDramaSeries().then(setAmericanSeries);
    getMiniseries().then(setMiniseries);
    getDocumentaries().then(setDocumentaries);
    getEpicWorldsSeries().then(setEpicWoroldSeries);
    getRealityShows().then(setRealityShows);
  }, []);

  return (
    <div className="movies-container">
      <HeroBanner
        backgroundImage={backgroundImage}
        title={title}
        description={description}
      />
      <MovieRow title="Lo nuevo en Netflix" movies={loNuevoEnNetflix} />
      <MovieRow title="Series de anime" movies={animeSeries} />
      <MovieRow title="Series dramáticas coreanas" movies={koreanDramas} />
      <MovieRow title="Series en español " movies={spanishSeries} />
      <Top10Row />
      <MovieRow title="Series premiadas" movies={awardSeries} />
      <MovieRow title="Series con mujeres protagonistas" movies={womenSeries} />
      <MovieRow title="Series dramáticas de EE. UU." movies={americanSeries} />
      <MovieRow title="Miniseries" movies={miniseries} />
      <MovieRow title="Documentarios" movies={documentaries} />
      <MovieRow title="Mundos épicos" movies={epicWorldSeries} />
      <MovieRow title="Reality shows" movies={realityShows} />
    </div>
  );
};

export default Peliculas;
