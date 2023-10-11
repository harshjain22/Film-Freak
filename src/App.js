import React, { useEffect, useState } from 'react';

import './App.css';
import SearchIcon from './Search.svg';
import MovieCards from './MovieCards';

// const API_URL = "http://www.omdbapi.com?apikey=48d028af";    // http for local host 
const API_URL = "https://www.omdbapi.com?apikey=48d028af";      // https for deployment 

// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([]);    // it's going to be an array so [] is default value

    const [searchTerm, setSearchTerm] = useState('');   // ''as it's a string,and bcz at start searchTerm is empty

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);     // assigning data coming from API to movie state
    }

    useEffect(() => {
        searchMovies("Batman");
    }, []);


    return (
        <div className='app'>

            <h1> Film-Freak</h1>

            <div className='search'>

                <input
                    placeholder='Search for your movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}

                />
                <img
                    src={SearchIcon}
                    alt="Search-icon"
                    onClick={() => searchMovies(searchTerm) }
                />

            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCards movie={movie} />
                            ))}
                        </div>

                    ) : (

                        <div className='empty'>
                            <h2> No Movie Found ! </h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;

