import React from "react";
import { Switch, Route } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import NavBar from "./NavBar";
import Map from "./Map";
import WishList from "./WishList";
import Home from "./Home";
import "./index.css";

function App() {
    
  return (
      <div className="App">
          <NavBar />
          <Switch>
              <Route path="/map">
                  <Map />
              </Route>
              <Route path="/wishlist">
                  <WishList />
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
