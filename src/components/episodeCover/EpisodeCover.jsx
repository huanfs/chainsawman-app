import React, { useState, useContext } from "react";

import { IoPlayCircle } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import VideoPlayer from "@components/videoPlayer/videoPlayer.jsx";

import { GlobalContext } from "@src/Context.jsx";

import { SearchEpisode } from "@services/SearchEpisode.js";

import "./EpisodeCover.scss";

const EpisodeCover = () => {

    const {
        episode,
        videoSource,
        setVideoSource,
        cover,
        ChangeEpisode,
    } = useContext(GlobalContext);

    const[focus, setFocus] = useState(false);

    function Focusable(){
        setFocus(!focus);
    }

    async function PlayEpisode(){

        const episodeLink = await SearchEpisode({episode});

        if(!episodeLink) return;
        else{
            setVideoSource(episodeLink);
        }
    }

    return(
        <>
            <article className={videoSource != null ? "video" : "ep"}>
                {
                    videoSource != null ? (
                        <VideoPlayer/>
                    ) : (
                        <>
                            <div className="poster">
                                <img 
                                    src={cover} 
                                />
                                <IoPlayCircle 
                                    style={{color:focus ? '#0040FF' : '#000'}} 
                                    onClick={PlayEpisode}
                                    aria-label="Reproduzir episódio"
                                    role="button"
                                    tabIndex="0"
                                    onMouseEnter={(e)=>{Focusable()}}
                                    onMouseLeave={(e)=>{Focusable()}}
                                />
                            </div>
                            <span style={{color: focus ? "var(--VibrantYellow)" : null}}>{episode}</span>
                            <div className="controls">
                                <button 
                                    type="button" 
                                    onClick={ChangeEpisode}>
                                        <FaLongArrowAltLeft/>
                                        Previous
                                </button>
                                |
                                <button 
                                    type="button" 
                                    onClick={ChangeEpisode}>
                                        Next
                                        <FaLongArrowAltRight/>
                                </button>
                            </div>
                        </>
                    )
                }
            </article>
        </>
    )
}

export default EpisodeCover;



