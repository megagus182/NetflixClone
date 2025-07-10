import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  getNowPlaying,
  getAnimeSeries,
  getKoreanDramas,
  getSpanishSeries,
  getAwardWinningSeries,
  getWomenLedSeries,
  getAmericanDramaSeries,
  getMiniseries,
  getThrillerSeries,
  getEpicWorldsSeries,
  getRealityShows,
} from "../../services/tmdb";
import Navbar from "../../components/navbar/Navbar";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import MovieRow from "../../components/movieRow/MovieRow";
import Top10Row from "../../components/topTenRow/TopTenRow";

const Home = () => {
  const [loNuevoEnNetflix, setLoNuevoEnNetflix] = useState([]);
  const [animeSeries, setAnimeSeries] = useState([]);
  const [koreanDramas, setKoreanDramas] = useState([]);
  const [spanishSeries, setSpanishSeries] = useState([]);
  const [awardSeries, setAwardSeries] = useState([]);
  const [womenSeries, setWomenSeries] = useState([]);
  const [americanSeries, setAmericanSeries] = useState([]);
  const [miniseries, setMiniseries] = useState([]);
  const [thrillerSeries, setThrillerSeries] = useState([]);
  const [epicWorldSeries, setEpicWoroldSeries] = useState([]);
  const [realityShows, setRealityShows] = useState([]);

  useEffect(() => {
    getNowPlaying().then(setLoNuevoEnNetflix);
    getAnimeSeries().then(setAnimeSeries);
    getKoreanDramas().then(setKoreanDramas);
    getSpanishSeries().then(setSpanishSeries);
    getAwardWinningSeries().then(setAwardSeries);
    getWomenLedSeries().then(setWomenSeries);
    getAmericanDramaSeries().then(setAmericanSeries);
    getMiniseries().then(setMiniseries);
    getThrillerSeries().then(setThrillerSeries);
    getEpicWorldsSeries().then(setEpicWoroldSeries);
    getRealityShows().then(setRealityShows);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <HeroBanner />
      <MovieRow title="Lo nuevo en Netflix" movies={loNuevoEnNetflix} />
      <MovieRow title="Series de anime" movies={animeSeries} />
      <MovieRow title="Series dramáticas coreanas" movies={koreanDramas} />
      <MovieRow title="Series en español " movies={spanishSeries} />
      <Top10Row />
      <MovieRow title="Series premiadas" movies={awardSeries} />
      <MovieRow title="Series con mujeres protagonistas" movies={womenSeries} />
      <MovieRow title="Series dramáticas de EE. UU." movies={americanSeries} />
      <MovieRow title="Miniseries" movies={miniseries} />
      <MovieRow title="Thrillers de TV" movies={thrillerSeries} />
      <MovieRow title="Mundos épicos" movies={epicWorldSeries} />
      <MovieRow title="Reality shows" movies={realityShows} />
    </div>
  );
};

export default Home;
