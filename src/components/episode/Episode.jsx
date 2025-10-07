import React, { useContext } from "react";

import { GlobalContext } from "../../Context.jsx";

import "./Episode.scss";

const Episode = ({ item }) => {

    const { 
        setEpisode, 
        setCover 
    } = useContext(GlobalContext);

    function GetEpisode(event){
        setEpisode(event.target.nextElementSibling.innerHTML)
        setCover(event.target.src);
    }
    return(
        <div className="episode" onClick={GetEpisode}>
            <img src={item.cover}/>
            <span>{item.episode}</span>
        </div>
    )
}

export default Episode;
