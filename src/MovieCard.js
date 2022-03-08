import React, { useState } from 'react'

function MovieCard ({movie, handleClickMovie}) {
    // const [className, setClassName] = useState(false);

    function clickMovie(){
        handleClickMovie(movie);
    }

    return (
        <div className="movie-card" onClick={clickMovie}>
            
            <h3>{movie.name}</h3>
            <p>{movie.location}</p>
            <img src={movie.image} alt={movie.name} />

        </div>
    )
}

export default MovieCard;