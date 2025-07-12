import React from "react";
import "./TopTen.css";
import top10SVGs from "./TopTenNumbers";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const TopTen = ({ movie, index }) => {
    const numberSVG = top10SVGs[index + 1];
  return (
    <div className="movie-card-topten">
      <div className="svg-number">{numberSVG}</div>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path || movie.backdrop_path}`}
        alt={movie.title}
      />
    </div>
  );
};
export default TopTen;
