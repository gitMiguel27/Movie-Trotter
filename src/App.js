import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddToMovieForm from "./AddToMovieForm";
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
            console.log(movieData);
            setMovies(movieData);
            
        })
    }, []);

    function handleClickMovie(clickedMovie){
        console.log(clickedMovie)
        if (!travel.includes(clickedMovie)) {
        setTravel([...travel, clickedMovie]);
        }
    }

    
  return (
      <div className="App">
          <NavBar />
          <Switch>
              <Route path="/addtomovieform">
                  <AddToMovieForm />
              </Route>
              <Route path="/travellist">
                  <TravelList 
                    travel={travel}
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
