import React,{ useState, useEffect } from "react";

import { allThumbs } from "../public/episodesInformations.jsx"; //<-- episode covers

import default_thumb from "../public/thumb/default_thumb.jpg"; //<-- default cover

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

    const[userName, setUserName] = useState(null);
    
    const[userPassword, setUserPassword] = useState(null);

    const[enter, setEnter] = useState(false);

    const[appSection, setAppSection] = useState("episodios");

    const[episode, setEpisode] = useState("episodio 01");

    const[cover, setCover] = useState(default_thumb);

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
            {enter, setEnter, appSection, setAppSection, episode, setEpisode, screenSize, setScreenSize, cover,setCover, userName, setUserName, userPassword, setUserPassword}
            }>
            { children }
        </GlobalContext.Provider>
    )
}


//this is an GlobalContext serving data acessible for all components in the app.

//here we import an array [allThumbs] from public paste, this array contains all 12 episode cover images.

//default_thumb is an initial thumb.

//we have some states: [
//  enter: define if user tryng to enter or register;
//  appSection: define the current section in app like: sinopse, episodes, season, etc...;
//  episode: storages the current episode label like: episode 01 or episode 02, etc...;
//  cover: storages the current cover for current selected episode;
//  screenSize: storages screen current width;
//].

//we have an useEffect responsible for change the state COVER if state EPISODE changes.