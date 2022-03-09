import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddAMovie from "./AddAMovie";
import TravelList from "./TravelList";
import MovieList from "./MovieList";
import "./index.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [travel, setTravel] = useState ([]);

    useEffect (() => {
        fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(movieData => {
            setMovies(movieData);
        })
    }, []);

    function handleClickMovie(clickedMovie){
        if (!travel.includes(clickedMovie)) {
        setTravel([...travel, clickedMovie]);
        }
    }

    function handleAddMovie (newMovie) {
        setMovies([...movies, newMovie])
    }
   
    // //PATCH HERE WHEN USER CLICKS SAVE
    // function saveComment(id) {
    //     fetch(`http://localhost:3000/movies/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({"comment": ''})
    //     })
    // }
    
  return (
      <div className="App">
          <NavBar />
          <Switch>
              <Route path="/addamovie">
                  <AddAMovie movies={movies} setMovies={setMovies} onAddMovie={handleAddMovie} />
              </Route>
              <Route path="/travellist">
                  <TravelList 
                    travel={travel}
                    // saveComment={saveComment}
                  />
              </Route>
              <Route exact path="/">
                  <MovieList 
                    movies={movies}
                    handleClickMovie={handleClickMovie}
                  />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
