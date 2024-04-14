import React,{ useState } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {

    const[enter, setEnter] = useState(false);
    
    return(
        <GlobalContext.Provider value={{enter, setEnter}}>
            { children }
        </GlobalContext.Provider>
    )
}