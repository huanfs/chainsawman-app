import React from "react";

import { NavLink } from "react-router-dom";

/*components*/
    import Episode from "../episode/Episode.jsx";
/*components*/

import Logo from "../../assets/logo.png";

import imagem_teste from "../../assets/background.webp";

import "./MainApp.scss";

const MainApp = () => {
    return(
        <section className="mainApp">
            <header>
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <nav className="navigation">
                    <button type="button">galeria de personagens</button>
                    <button type="button">sinopse</button>
                    <button type="button">outros botões</button>
                    <button type="button"><NavLink to={"/"} className="exit">sair</NavLink></button>
                </nav>
            </header>

            <section className="episodePreview">
                <Episode/>
            </section>

        </section>
    )
}

export default MainApp;