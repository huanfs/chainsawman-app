import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./HeaderNavigation.scss";

const HeaderNavigation = () => {
    return(
        <header>
            <div className="logo">
                <img src={Logo}/>
            </div>
            <nav className="navigation">
                <button type="button">galeria de personagens</button>
                <button type="button">sinopse</button>
                <button type="button">outros botões</button>
                <button type="button"><Link to={"/"} className="exit">sair</Link></button>
            </nav>
        </header>
    )
}

export default HeaderNavigation;