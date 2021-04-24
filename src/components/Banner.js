import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import { baseUrl } from "../requests";
import "../Banner.css";

function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    setInterval(() => {
      getMovie();
    }, 9000);
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        background: `url(${baseUrl}${movie?.backdrop_path})center/cover`,
        // backgroundSize: "cover",
      }}
    >
      <div className="banner_content">
        <h1>{movie?.title || movie?.name || movie?.original_title}</h1>
        <p>{truncate(movie?.overview, 150)}</p>
        <div className="btns">
          <button type="button" className="btn-paly">
            play
          </button>
          <button type="button" className="btn-list">
            my list
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
