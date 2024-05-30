import React from "react";

import { GlobalContext } from "../../Context.jsx";

import "./Episode.scss";

const Episode = ({ item }) => {

    const episode = React.useContext(GlobalContext);

    function GetEpisode(event){
        episode.setEpisode(event.target.nextElementSibling.innerHTML)
        episode.setCover(event.target.src);
    }
    return(
        <div className="episode" onClick={GetEpisode}>
            <img src={item.cover}/>
            <span>{item.episode}</span>
        </div>
    )
}

export default Episode;
