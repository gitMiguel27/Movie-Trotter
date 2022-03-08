import React from "react";
import MovieCard from './MovieCard'

function TravelList({travel}) {

    const showMovies = travel.map((movie) => {
       
        return (
            <MovieCard 
                key={movie.id}
                movie={movie}
                className="travel-cards"
            />
        )
    })
    return (
        <div>
            <h1>Hello From Travel List</h1>
            <div className="travel-container">
                {showMovies}
            </div>
        </div>

    )
}

export default TravelList;