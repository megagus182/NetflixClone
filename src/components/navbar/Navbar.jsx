import React from "react";
import './Navbar.css'

const Navbar = ()=>{

    return(
        <nav className="navbar">
            <div className="navbar-container">
            <div className="logo">NetflixClone</div>
            <ul className="nav-links">
                <li>Inicio</li>
                <li>Series</li>
                <li>Películas</li>
                <li>Mi lista</li>
            </ul>
            <div className="secondary-nav">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;