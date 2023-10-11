import React from 'react';

const MovieCards = ({ movie }) => {

    return (

        <div className="movie">

            <div>
                <p> {movie.Year} </p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <h3> {movie.Type} </h3>
                <span> {movie.Title}  </span>
            </div>

        </div>

    );
}

export default MovieCards;