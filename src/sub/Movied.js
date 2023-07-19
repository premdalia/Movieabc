import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=4a3b711b`)//axios.get('https://www.omdbapi.com/?      s=man   &apikey=4a3b711b')
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <p>Year: {movie.Year}</p>
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
      {/* Add other movie details here */}
    </div>
  );
}

export default MovieDetail;
