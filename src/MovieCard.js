import React, { useState } from 'react'

function MovieCard ({movie, handleClickMovie}) {
    // const [className, setClassName] = useState(false);



    function clickMovie(){
        handleClickMovie(movie);
        // if (!travel.includes(clickedMovie)) {
        //     fetch('http://localhost:3000/travel', {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name: clickedMovie.name,
        //     image: clickedMovie.image,
        //     location: clickedMovie.location,
        //     comment: clickedMovie.comment
        //   }),
        // })
        // // .then(resp => resp.json())
        // // .then((addedTravel) => onHandlePost(addedTravel))       
        // }
        //     setTravel([...travel, clickedMovie]);
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