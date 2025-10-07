import React, { useContext } from "react";

import HeaderNavigation from "@components/headerNavigation/HeaderNavigation.jsx";
import EpisodeCover from "@components/episodeCover/EpisodeCover.jsx";
import Episode from "@components/episode/Episode.jsx";
import Seasons from "@components/seasons/Seasons.jsx";
import Sinopse from "@components/sinopse/Sinopse.jsx";

import { GlobalContext } from "@src/Context.jsx";

import { episodesInformations } from "../../../public/episodesInformations.jsx";

import "./MainApp.scss";

const MainApp = () => {

    const { appSection } = useContext(GlobalContext);

    return(
        <section className="mainApp">
            <HeaderNavigation/>
            <section className="mainAppInformations">
                <EpisodeCover/>
                <section className="informations">
                    {
                        appSection == "sinopse" ? (
                            <Sinopse/>
                        ) : null
                    }
                    {
                        appSection == "episodios" ? (
                            <>
                            <h2>episódios</h2>
                            <section className="episodes">
                                {episodesInformations.map((item, index)=>{
                                return(
                                    <Episode item={item} key={index}/>
                                )
                            })}
                            </section>
                            </>
                        ) : null
                    }
                    {
                        appSection == "temporadas" ? (
                            <Seasons/>
                        ) : null
                    }
                </section>
            </section>
        </section>
    )
}

export default MainApp;
