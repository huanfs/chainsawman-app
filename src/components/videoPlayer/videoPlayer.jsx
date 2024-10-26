import React,{ useState, useRef, useEffect } from "react";

import { GlobalContext } from "../../Context.jsx";

import { RxCross2 } from "react-icons/rx";

import "./videoPlayer.scss";

const VideoPlayer = () =>{

    const video = React.useContext(GlobalContext);
    console.log(video.videoSource)

    return(
        <>
            {
                video.videoSource != null ? (
                <>
                    <video controls>
                        <source src={video.videoSource} type="video/mp4"/>
                    </video>
                    <button className="btnClose" type="button" onClick={()=>{video.setVideoSource(null)}}><RxCross2/>fechar</button>
                </>
                ) : (
                    <img src="../assets/error.png"/>
                )
            }
        </>
    )
}
/*
preciso criar a tag video e estiliza-la com css
*/
export default VideoPlayer;