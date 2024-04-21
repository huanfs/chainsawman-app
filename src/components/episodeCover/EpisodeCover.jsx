import React,{ useState, useRef, useEffect } from "react";

/*icons*/
    import { IoPlayCircle } from "react-icons/io5";
    import { FaLongArrowAltLeft } from "react-icons/fa";
    import { FaLongArrowAltRight } from "react-icons/fa";
/*icons*/

import {GlobalContext } from "../../Context.jsx";

import imagem_teste from "../../assets/thumb_ep03.jpg";

import "./EpisodeCover.scss";

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
                    <img src={imagem_teste} ref={poster}/>
                    <IoPlayCircle ref={icon_play} style={{display: focus ? "flex" : "none"}}/>
                </div>
                <span style={{color: focus ? "var(--VibrantYellow)" : null}}>{episodeSelection.episode}</span>
                <div className="controls">
                    <button type="button"><FaLongArrowAltLeft/>previous</button>
                    |
                    <button type="button">next<FaLongArrowAltRight/></button>
                </div>
            </article>
        </>
    )
}

export default EpisodeCover;