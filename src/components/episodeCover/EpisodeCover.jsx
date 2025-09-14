import React, { useState, useRef, useEffect, useContext } from "react";

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

    const episodeSelection = useContext(GlobalContext);

    const[focus, setFocus] = useState(false);

    // Removido videoSource local pois está sendo gerenciado pelo contexto

    const poster = useRef(null);

    function Focusable(){
        setFocus(!focus);
    }

    useEffect(() => {
        const posterElement = poster.current;
        if (posterElement) {
            posterElement.addEventListener("mouseover", Focusable);
            posterElement.addEventListener("mouseout", Focusable);
            
            return () => {
                posterElement.removeEventListener("mouseover", Focusable);
                posterElement.removeEventListener("mouseout", Focusable);
            };
        }
    }, [])

    //adicionar a função que irá buscar o episodio no banco de dados ao clicar no icone play
    async function PlayEpisode(){
        try {
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
            
            if (!buscar.ok) {
                throw new Error(`Erro na requisição: ${buscar.status}`);
            }
            
            const resultado = await buscar.json();
            episodeSelection.setVideoSource(resultado.episodio);
        } catch (error) {
            console.error("Erro ao reproduzir episódio:", error);
            // Aqui você pode adicionar um toast ou modal de erro
        }
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
                                <IoPlayCircle 
                                    style={{color:focus ? '#0040FF' : '#000'}} 
                                    onClick={PlayEpisode}
                                    aria-label="Reproduzir episódio"
                                    role="button"
                                    tabIndex="0"
                                />
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



