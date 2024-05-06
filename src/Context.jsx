import React,{ useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

    const[enter, setEnter] = useState(false);

    const[appSection, setAppSection] = useState("sinopse");

    const[episode, setEpisode] = useState("episodio 01");

    const[screenSize, setScreenSize] = useState(null);

    return(
        <GlobalContext.Provider value={{enter, setEnter, appSection, setAppSection, episode, setEpisode, screenSize, setScreenSize}}>
            { children }
        </GlobalContext.Provider>
    )
}