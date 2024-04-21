import React from "react";

import { NavLink } from "react-router-dom";

/*components*/
    import HeaderNavigation from "../headerNavigation/HeaderNavigation.jsx";
    import Episode from "../episode/Episode.jsx";
/*components*/

import Logo from "../../assets/logo.png";

import imagem_teste from "../../assets/background.webp";

import "./MainApp.scss";

const MainApp = () => {
    return(
        <section className="mainApp">
            <HeaderNavigation/>
            <section className="episodePreview">
                <Episode/>
            </section>

        </section>
    )
}

export default MainApp;