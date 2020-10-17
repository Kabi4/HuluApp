import React ,{forwardRef}from "react";
import "./Movie.css";
import { ThumbUpSharp } from "@material-ui/icons";

const baseURL = "https://image.tmdb.org/t/p/w500";
const Movie = forwardRef(({ movie },ref) => {
  return (
    <div ref={ref} className="movie">
      <img
        alt="movie poster"
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
      />
      <h2>
        {movie.overview < 55
          ? movie.overview
          : movie.overview.slice(0, 55) + "..."}
      </h2>
      <h1>{movie.title || movie.original_name}</h1>
      <div>
           {movie.media_type && <p style={{textTransform: "uppercase",fontWeight: "700"}}><strong>·</strong> {movie.media_type}</p>}
          <p><strong>·</strong> {movie.release_date || movie.first_air_date}</p>
        <p><ThumbUpSharp/> {" "}
        {movie.vote_count}</p>
    </div>
    </div>
  );
});

export default Movie;
