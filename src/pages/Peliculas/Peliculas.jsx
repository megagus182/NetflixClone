import React, { useState, useEffect } from "react";
import "./Peliculas.css";
import {
  getNowPlaying,
  getTrendingMovies,
  getTopRatedMovies,
  getActionMovies,
  getComedyMovies,
  getRomanceMovies,
  getHorrorMovies,
  getAnimatedMovies,
  getDocumentaryMovies,
} from "../../services/tmdb";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import MovieRow from "../../components/movieRow/MovieRow";
import Top10Row from "../../components/topTenRow/TopTenRow";

const Peliculas = () => {
  const [loNuevoEnNetflix, setLoNuevoEnNetflix] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [animatedMovies, setAnimatedMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);

  // ✅ Filtro: solo películas que tienen imagen
  const filtrarContenidoConImagen = (lista) =>
    lista.filter(item => item.backdrop_path);


  const backgroundImage =
    "https://image.tmdb.org/t/p/original/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg";
  const title = "The Irishman";
  const description =
    "Frank Sheeran, veterano de guerra convertido en sicario, recuerda los secretos que guardó sobre el crimen organizado. Una historia épica de lealtad, traición y poder.";

  useEffect(() => {
    getNowPlaying().then(res => setLoNuevoEnNetflix(filtrarContenidoConImagen(res)));
    getTrendingMovies().then(res => setTrendingMovies(filtrarContenidoConImagen(res)));
    getTopRatedMovies().then(res => setTopRatedMovies(filtrarContenidoConImagen(res)));
    getActionMovies().then(res => setActionMovies(filtrarContenidoConImagen(res)));
    getComedyMovies().then(res => setComedyMovies(filtrarContenidoConImagen(res)));
    getRomanceMovies().then(res => setRomanceMovies(filtrarContenidoConImagen(res)));
    getHorrorMovies().then(res => setHorrorMovies(filtrarContenidoConImagen(res)));
    getAnimatedMovies().then(res => setAnimatedMovies(filtrarContenidoConImagen(res)));
    getDocumentaryMovies().then(res => setDocumentaryMovies(filtrarContenidoConImagen(res)));
  }, []);

  return (
    <div className="movies-container">
      <HeroBanner
        backgroundImage={backgroundImage}
        title={title}
        description={description}
      />
      <MovieRow title="Lo nuevo en Netflix" movies={loNuevoEnNetflix} />
      <MovieRow title="Películas en tendencia" movies={trendingMovies} />
      <MovieRow title="Mejor calificadas" movies={topRatedMovies} />
      <MovieRow title="Películas de acción" movies={actionMovies} />
      <Top10Row />
      <MovieRow title="Películas de comedia" movies={comedyMovies} />
      <MovieRow title="Películas de romance" movies={romanceMovies} />
      <MovieRow title="Películas de terror" movies={horrorMovies} />
      <MovieRow title="Películas animadas" movies={animatedMovies} />
      <MovieRow title="Documentales" movies={documentaryMovies} />
    </div>
  );
};

export default Peliculas;
