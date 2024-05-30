import React from "react";

/*components*/
    import HeaderNavigation from "../headerNavigation/HeaderNavigation.jsx";
    import EpisodeCover from "../episodeCover/EpisodeCover.jsx";
    import Episode from "../episode/Episode.jsx";
    import Seasons from "../seasons/Seasons.jsx";
    import Sinopse from "../sinopse/Sinopse.jsx";
/*components*/

import { GlobalContext } from "../../Context.jsx"; /*context*/

import { episodesInformations } from "../../../public/episodesInformations.jsx";

import "./MainApp.scss"; //<--styles

const MainApp = () => {

    const appSection = React.useContext(GlobalContext);

    return(
        <section className="mainApp">
            <HeaderNavigation/>
            <section className="mainAppInformations">
                <EpisodeCover/>
                <section className="informations">
                    {
                        appSection.appSection == "sinopse" ? (
                            <Sinopse/>
                        ) : null
                    }
                    {
                        appSection.appSection == "episodios" ? (
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
                        appSection.appSection == "temporadas" ? (
                            <Seasons/>
                        ) : null
                    }
                </section>
            </section>
        </section>
    )
}

export default MainApp;
