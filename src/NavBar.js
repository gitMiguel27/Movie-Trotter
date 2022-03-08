import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/Map">Map</NavLink>
            <NavLink to="/Wishlist">Wish List</NavLink>
        </nav>
    );
}

export default NavBar;