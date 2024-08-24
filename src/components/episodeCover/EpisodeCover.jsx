import React,{ useState, useRef, useEffect } from "react";

/*icons*/
    import { IoPlayCircle } from "react-icons/io5";
    import { FaLongArrowAltLeft } from "react-icons/fa";
    import { FaLongArrowAltRight } from "react-icons/fa";
/*icons*/

/*components*/
    import VideoPlayer from "../videoPlayer/videoPlayer.jsx";
/*components*/

import { GlobalContext } from "../../Context.jsx";

import "./EpisodeCover.scss"; //<--styles

const EpisodeCover = () => {

    const episodeSelection = React.useContext(GlobalContext);

    const[focus, setFocus] = useState(false);

    const[videoSource, setVideoSource] = useState(null);// armazena o caminho do episodio;

    const poster = useRef(null);
    const icon_play = useRef(null);

    function Focusable(){
        setFocus(!focus);
    }

    useEffect(()=>{
        poster.current.addEventListener("mouseover", Focusable);
        poster.current.addEventListener("mouseout", Focusable);
    },[focus])

    //adicionar a função que irá buscar o episodio no banco de dados ao clicar no icone play
    async function PlayEpisode(){
        const dados = {
            titulo: episodeSelection.episode
        }
        const buscar = await fetch("http://localhost:3000/reproduzir",{
            method: "POST",
            body: JSON.stringify(dados),
                headers:{
                    "Content-Type":"application/json",
                }
        });
        const resultado = await buscar.json();
        episodeSelection.setVideoSource(resultado.episodio);
    }
    //adicionar a função que irá buscar o episodio no banco de dados ao clicar no icone play

    return(
        <>
            <article className={episodeSelection.videoSource != null ? "video" : "ep"}>
                {
                    episodeSelection.videoSource != null ? (
                        <VideoPlayer/>
                    ) : (
                        <>
                            <div className="poster">
                                <img src={episodeSelection.cover} ref={poster}/>
                                <IoPlayCircle style={{color:focus ? '#0040FF' : '#000'}}ref={icon_play} onClick={PlayEpisode}/>
                            </div>
                            <span style={{color: focus ? "var(--VibrantYellow)" : null}}>{episodeSelection.episode}</span>
                            <div className="controls">
                                <button type="button" onClick={episodeSelection.ChangeEpisode}><FaLongArrowAltLeft/>previous</button>
                                |
                                <button type="button" onClick={episodeSelection.ChangeEpisode}>next<FaLongArrowAltRight/></button>
                            </div>
                        </>
                    )
                }
            </article>
        </>
    )
}

export default EpisodeCover;



