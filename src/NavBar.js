import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink exact to="/">Movie List</NavLink>
            <NavLink to="/AddToMovieForm">Add To Movie Form</NavLink>
            <NavLink to="/TravelList">Travel List</NavLink>
        </nav>
    );
}

export default NavBar;