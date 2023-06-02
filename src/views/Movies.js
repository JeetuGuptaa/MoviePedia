import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';

function Movies({url}){
    const [movies, setMovies] = useState([]);
    

    function fetchMovies(){
        fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data))
    }

    useEffect( () => {
        fetchMovies();
    }
    ,[]);

    return (
        <div>
            <ul id = "movieList">
                {movies.map(function(movie){
                    return (
                        <li className='movieCard' key = {movie.show.id}>
                            <MovieCard movie = {movie}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Movies;