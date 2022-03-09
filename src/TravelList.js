import React from "react";
import MovieCard from './MovieCard'
import AddNote from "./AddNote";

function TravelList({travel, saveComment}) {
    const showMovies = travel.map((movie) => {
       
        return (
            <div key={movie.id} className="travel-card-container">
                <MovieCard 
                    movie={movie}
                    className="travel-cards"
                />
                <AddNote saveComment={saveComment}/>
            </div>
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