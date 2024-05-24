import React,{ useState, useRef, useEffect } from "react";

/*icons*/
    import { IoPlayCircle } from "react-icons/io5";
    import { FaLongArrowAltLeft } from "react-icons/fa";
    import { FaLongArrowAltRight } from "react-icons/fa";
/*icons*/

import { GlobalContext } from "../../Context.jsx";

import "./EpisodeCover.scss"; //<--styles

const EpisodeCover = () => {

    const episodeSelection = React.useContext(GlobalContext);

    const[focus, setFocus] = useState(false);

    const poster = useRef(null);
    const icon_play = useRef(null);

    function Focusable(){
        setFocus(!focus);
    }

    useEffect(()=>{
        poster.current.addEventListener("mouseover", Focusable);
        poster.current.addEventListener("mouseout", Focusable);
    },[focus])

    return(
        <>
            <article className="ep">
                <div className="poster">
                    <img src={episodeSelection.cover} ref={poster}/>
                    <IoPlayCircle style={{color:focus ? '#0040FF' : '#000'}}ref={icon_play}/>
                </div>
                <span style={{color: focus ? "var(--VibrantYellow)" : null}}>{episodeSelection.episode}</span>
                <div className="controls">
                    <button type="button" onClick={episodeSelection.ChangeEpisode}><FaLongArrowAltLeft/>previous</button>
                    |
                    <button type="button" onClick={episodeSelection.ChangeEpisode}>next<FaLongArrowAltRight/></button>
                </div>
            </article>
        </>
    )
}

export default EpisodeCover;


//this component imports some icons from react-icons.

//import GlobalContext to consume both cover and episode states from him.

//we have focus state responsible for detect if mouse in or mouse out.

//we have two refs, one for the main image inside #poster, and another for play icon inside #poster.

//the function Focusable() changes the focus value between true or false depending on mouse in or 
//mouse leaves the poster reference.

//we use an useEffect to sets mouseover and mouseout event to poster passing the Focusable().

