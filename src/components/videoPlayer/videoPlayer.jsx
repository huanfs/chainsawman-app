import React,{ useContext } from "react";

import { GlobalContext } from "@src/Context.jsx";

import { RxCross2 } from "react-icons/rx";

import Error from "@assets/error.png";

import "./videoPlayer.scss";

const VideoPlayer = () =>{

    const { 
        videoSource, 
        setVideoSource 
    } = useContext(GlobalContext);

    return(
        <>
            {
                videoSource != null ? (
                <>
                    <button 
                        className="btnClose" 
                        type="button" 
                        onClick={()=>{
                            setVideoSource(null)}
                            }>
                                <RxCross2/>
                                fechar
                    </button>
                    <video controls>
                        <source 
                        src={videoSource} 
                        type="video/mp4"/>
                    </video>
                </>
                ) : (
                    <img src={Error}/>
                )
            }
        </>
    )
}

export default VideoPlayer;