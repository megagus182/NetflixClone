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
  getDocumentaries,
  getEpicWorldsSeries,
  getRealityShows,
} from "../../services/tmdb";
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
  const [documentaries, setDocumentaries] = useState([]);
  const [epicWorldSeries, setEpicWoroldSeries] = useState([]);
  const [realityShows, setRealityShows] = useState([]);

  // ✅ Función para filtrar por imagen válida
  const filtrarContenidoConImagen = (lista) =>
    lista.filter(item => item.backdrop_path);

  const backgroundImage = "https://image.tmdb.org/t/p/original/d0dRxEmbrYbkeJql4j2DDDYEyN.jpg";
  const title = "One Piece";
  const description =
    "Luffy y su tripulación navegan por mares peligrosos en busca del tesoro más grande del mundo: el One Piece. ¡Aventura, risas y mucha acción!";

  useEffect(() => {
    getNowPlaying().then(res => setLoNuevoEnNetflix(filtrarContenidoConImagen(res)));
    getAnimeSeries().then(res => setAnimeSeries(filtrarContenidoConImagen(res)));
    getKoreanDramas().then(res => setKoreanDramas(filtrarContenidoConImagen(res)));
    getSpanishSeries().then(res => setSpanishSeries(filtrarContenidoConImagen(res)));
    getAwardWinningSeries().then(res => setAwardSeries(filtrarContenidoConImagen(res)));
    getWomenLedSeries().then(res => setWomenSeries(filtrarContenidoConImagen(res)));
    getAmericanDramaSeries().then(res => setAmericanSeries(filtrarContenidoConImagen(res)));
    getMiniseries().then(res => setMiniseries(filtrarContenidoConImagen(res)));
    getDocumentaries().then(res => setDocumentaries(filtrarContenidoConImagen(res)));
    getEpicWorldsSeries().then(res => setEpicWoroldSeries(filtrarContenidoConImagen(res)));
    getRealityShows().then(res => setRealityShows(filtrarContenidoConImagen(res)));
  }, []);

  return (
    <div className="home-container">
      <HeroBanner
        backgroundImage={backgroundImage}
        title={title}
        description={description}
      />
      <MovieRow title="Lo nuevo en Netflix" movies={loNuevoEnNetflix} />
      <MovieRow title="Series de anime" movies={animeSeries} />
      <MovieRow title="Series dramáticas coreanas" movies={koreanDramas} />
      <MovieRow title="Series en español" movies={spanishSeries} />
      <Top10Row />
      <MovieRow title="Series premiadas" movies={awardSeries} />
      <MovieRow title="Series con mujeres protagonistas" movies={womenSeries} />
      <MovieRow title="Series dramáticas de EE. UU." movies={americanSeries} />
      <MovieRow title="Miniseries" movies={miniseries} />
      <MovieRow title="Documentales" movies={documentaries} />
      <MovieRow title="Mundos épicos" movies={epicWorldSeries} />
      <MovieRow title="Reality shows" movies={realityShows} />
    </div>
  );
};

export default Home;
