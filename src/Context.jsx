import React,{ useState, useEffect } from "react";

import { allThumbs } from "../public/episodesInformations.jsx"; //<-- episode covers

import default_thumb from "./assets/thumb/default_thumb.jpg"; //<-- default cover

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

    const[userName, setUserName] = useState(null);
    
    const[userPassword, setUserPassword] = useState(null);

    const[enter, setEnter] = useState(false);

    const[appSection, setAppSection] = useState("episodios");

    const[episode, setEpisode] = useState("episodio 01");

    const[cover, setCover] = useState(default_thumb);

    const[videoSource, setVideoSource] = useState(null);

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




    //estou criando aqui a função de aumentar ou diminuir episodios
    const ChangeEpisode = (event) => {
        if(event.target.innerText == 'Previous'){
            switch(episode){
                case "episodio 12" : setEpisode("episodio 11"), setCover(allThumbs[11]); break;
                case "episodio 11" : setEpisode("episodio 10"), setCover(allThumbs[10]); break;
                case "episodio 10" : setEpisode("episodio 09"), setCover(allThumbs[9]); break;
                case "episodio 09" : setEpisode("episodio 08"), setCover(allThumbs[8]); break;
                case "episodio 08" : setEpisode("episodio 07"), setCover(allThumbs[7]); break;
                case "episodio 07" : setEpisode("episodio 06"), setCover(allThumbs[6]); break;
                case "episodio 06" : setEpisode("episodio 05"), setCover(allThumbs[5]); break;
                case "episodio 05" : setEpisode("episodio 04"), setCover(allThumbs[4]); break;
                case "episodio 04" : setEpisode("episodio 03"), setCover(allThumbs[3]); break;
                case "episodio 03" : setEpisode("episodio 02"), setCover(allThumbs[2]); break;
                case "episodio 02" : setEpisode("episodio 01"), setCover(allThumbs[1]); break;
            }
        }
        else if(event.target.innerText == 'Next'){
            switch(episode){
                case "episodio 01" : setEpisode("episodio 02"), setCover(allThumbs[1]); break;
                case "episodio 02" : setEpisode("episodio 03"), setCover(allThumbs[2]); break;
                case "episodio 03" : setEpisode("episodio 04"), setCover(allThumbs[3]); break;
                case "episodio 04" : setEpisode("episodio 05"), setCover(allThumbs[4]); break;
                case "episodio 05" : setEpisode("episodio 06"), setCover(allThumbs[5]); break;
                case "episodio 06" : setEpisode("episodio 07"), setCover(allThumbs[6]); break;
                case "episodio 07" : setEpisode("episodio 08"), setCover(allThumbs[7]); break;
                case "episodio 08" : setEpisode("episodio 09"), setCover(allThumbs[8]); break;
                case "episodio 09" : setEpisode("episodio 10"), setCover(allThumbs[9]); break;
                case "episodio 10" : setEpisode("episodio 11"), setCover(allThumbs[10]); break;
                case "episodio 11" : setEpisode("episodio 12"), setCover(allThumbs[11]); break;
            }
        }
    }

    /*esse feito fecha o player de video ao mudar entre as seções do app*/
    useEffect(()=>{
        setVideoSource(null);
    },[appSection, episode])

    return(
        <GlobalContext.Provider value={
            {enter, setEnter, appSection, setAppSection, episode, setEpisode, ChangeEpisode, cover,setCover, userName, setUserName, userPassword, setUserPassword, videoSource, setVideoSource}
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