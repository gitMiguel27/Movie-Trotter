import React from "react";
import MovieCard from './MovieCard'

function MovieList({movies, handleClickMovie}) {

    const showMovies = movies.map((movie) => {
       
        return (
            <MovieCard 
                key={movie.id}
                movie={movie}
                handleClickMovie={handleClickMovie}
            />
        )
    })

    return (
        <div>
            <h1>Welcome to Movie Trotter!</h1>
            <div className="movies-containter">
                {showMovies}
            </div>
        </div>
    )
}

export default MovieList;