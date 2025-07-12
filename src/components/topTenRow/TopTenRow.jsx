import React, { useEffect, useState, useRef } from "react";
import { getTop10Movies } from "../../services/tmdb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TopTen from "../topTen/TopTen";
import "../movieRow/MovieRow.css";

const Top10Row = () => {
  const [movies, setMovies] = useState([]);
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

  useEffect(() => {
    getTop10Movies().then(setMovies);
  }, []);

  return (
    <div className="movie-row">
      <h2 className="row-title">Top 10 en México hoy</h2>
      <div className="scroll-buttons">
        <button onClick={() => scroll("left")} className="scroll-btn left">
          <FaChevronLeft size={30} color="#fff" />
        </button>

        <div className="movie-row-scroll" ref={scrollRef}>
          {movies.map((movie, index) => (
            <TopTen key={movie.id} movie={movie} index={index} />
          ))}
        </div>

        <button onClick={() => scroll("right")} className="scroll-btn right">
          <FaChevronRight size={30} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Top10Row;
