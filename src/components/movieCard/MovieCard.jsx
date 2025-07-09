import "./MovieCard.css";
import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card-container">
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%" }}
      />
      <div className="movie-title-container">
        <h3>{movie.title}</h3>
        ⭐ {movie.vote_average}
        <p></p>
      </div>
    </div>
  );
};

export default MovieCard;
