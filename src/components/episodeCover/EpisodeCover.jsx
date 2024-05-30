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



