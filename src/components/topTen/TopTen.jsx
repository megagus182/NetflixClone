import React from "react";
import "./TopTen.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const TopTen = ({ movie, index }) => {
  return (
    <div className="movie-card-topten">
      <div className="number">{index + 1}</div>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path || movie.backdrop_path}`}
        alt={movie.title}
        style={{ width: "100%" }}
      />
    </div>
  );
};
export default TopTen;
