import React,{ useState, useEffect } from "react";

import { allThumbs } from "../public/episodesInformations.jsx";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

    const[enter, setEnter] = useState(false);

    const[appSection, setAppSection] = useState("sinopse");

    const[episode, setEpisode] = useState("episodio 01");

    const[cover, setCover] = useState(null);

    const[screenSize, setScreenSize] = useState(null);

    useEffect(()=>{
        switch(cover){
            case "episodio 01" : setCover(allThumbs[0]); Break;
            case "episodio 02" : setCover(allThumbs[1]); Break;
            case "episodio 03" : setCover(allThumbs[2]); Break;
            case "episodio 04" : setCover(allThumbs[3]); Break;
            case "episodio 05" : setCover(allThumbs[4]); Break;
            case "episodio 06" : setCover(allThumbs[5]); Break;
            case "episodio 07" : setCover(allThumbs[6]); Break;
            case "episodio 08" : setCover(allThumbs[7]); Break;
            case "episodio 09" : setCover(allThumbs[8]); Break;
            case "episodio 10" : setCover(allThumbs[9]); Break;
            case "episodio 11" : setCover(allThumbs[10]); Break;
            case "episodio 12" : setCover(allThumbs[11]); Break;
        }
    },[episode])
    return(
        <GlobalContext.Provider value={
            {enter, setEnter, appSection, setAppSection, episode, setEpisode, screenSize, setScreenSize, cover,setCover}
            }>
            { children }
        </GlobalContext.Provider>
    )
}