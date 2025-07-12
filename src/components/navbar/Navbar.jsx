import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaRegBell , FaSearch } from 'react-icons/fa';

const Navbar = ()=>{

    return(
        <nav className="navbar">
            <div className="navbar-container">
            <div className="logo">NETFLIX</div>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/series">Series</Link></li>
                <li><Link to="/peliculas">Películas</Link></li>
                <li><Link to="/mi-lista">Mi lista</Link></li>
            </ul>
            <div className="secondary-nav">
                <div><FaSearch/></div>
                <div><Link to="/ninos">Niños</Link></div>
                <div><FaRegBell/></div>
                <div>Perfil</div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;