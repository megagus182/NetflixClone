import React, { useRef } from "react";
import "./MovieRow.css";
import MovieCard from "../movieCard/MovieCard";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieRow = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="movie-row">
      <h2 className="movie-row-title">{title}</h2>
      <div className="scroll-buttons">
        <button onClick={() => scroll("left")} className="scroll-btn left">
          <FaChevronLeft size={30} color="#fff"/>
        </button>

        <div className="movie-row-scroll" ref={scrollRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button onClick={() => scroll("right")} className="scroll-btn right">
          <FaChevronRight size={30} color="#fff"/>
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
