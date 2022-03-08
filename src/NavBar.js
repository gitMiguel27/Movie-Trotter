import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink exact to="/">Movie List</NavLink>
            <NavLink to="/AddAMovie">Add a Movie</NavLink>
            <NavLink to="/TravelList">Travel List</NavLink>
        </nav>
    );
}

export default NavBar;