import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import the Link component from react-router-dom

function Axiostut() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
      .then((response) => {
        setData(response.data.Search);
        console.log(response.data.Search);
      });

  }, []);

  return (
    <>
      <div>
        <h1>Movie List</h1>
        {data.map((movie) => (
          <div key={movie.Title}>
            <Link to={`/movie/${movie.imdbID}`} style={{textDecoration: "none"}}>
            <span style={{color: 'black',fontSize:30}}>  {movie.Title}</span>
              <div>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            </Link>
            <br></br><br></br><br></br>
          </div>
        ))}
      </div>
    </>
  );
}

export default Axiostut;
