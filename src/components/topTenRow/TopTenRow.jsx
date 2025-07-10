import React, { useEffect, useState } from "react";
import { getTop10Movies } from "../../services/tmdb";
import TopTen from "../topTen/TopTen";
import "../movieRow/MovieRow.css";

const Top10Row = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTop10Movies().then(setMovies);
  }, []);

  return (
    <div className="movie-row">
      <h2 className="row-title">Top 10 en México hoy</h2>
      <div className="movie-row-scroll">
        {movies.map((movie, index) => (
          <TopTen key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Top10Row;
