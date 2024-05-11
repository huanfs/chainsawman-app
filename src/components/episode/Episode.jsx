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


//this component consumes GlobalContext and access both episode state and cover state from him.

//we have an function called GetEpisode(event) receiving as argument the event, this function:
//sets episode value to event next element innerHTML.
//sets the cover value to a same SRC of event.target.