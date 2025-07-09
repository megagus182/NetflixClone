import React, { useState, useEffect } from "react";
import "./Home.css";
import { getPopularMovies } from "../../services/tmdb";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/Navbar";
import HeroBanner from "../../components/heroBanner/HeroBanner";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <div className="movie-map-container">
      <Navbar />
      <HeroBanner />
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
