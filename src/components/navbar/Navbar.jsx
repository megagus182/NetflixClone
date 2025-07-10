import React from "react";
import './Navbar.css'
import { FaRegBell , FaSearch } from 'react-icons/fa';

const Navbar = ()=>{

    return(
        <nav className="navbar">
            <div className="navbar-container">
            <div className="logo">NETFLIX</div>
            <ul className="nav-links">
                <li>Inicio</li>
                <li>Series</li>
                <li>Películas</li>
                <li>Mi lista</li>
            </ul>
            <div className="secondary-nav">
                <div><FaSearch/></div>
                <div>Niños</div>
                <div><FaRegBell/></div>
                <div>Perfil</div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;