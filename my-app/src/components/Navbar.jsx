import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/add-post">Ajouter un Post</Link>
        </nav>
    );
};

export default NavBar;
