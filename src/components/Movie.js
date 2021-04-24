import React, { useState, useEffect } from "react";
import axios from "../axios";
import { baseUrl } from "../requests";
import "../Movie.css";

function Movie({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="container">
      <h3 className="movie-title">{title}</h3>

      <div className="movies-wrapper">
        {movies.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <a href>
                <img
                  src={`${baseUrl}${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
              </a>
              <a href>{movie?.title || movie?.original_title || movie?.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
