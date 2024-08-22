import React,{ useState, useRef, useEffect } from "react";

import { GlobalContext } from "../../Context.jsx";

import { RxCross2 } from "react-icons/rx";

import "./videoPlayer.scss";

const VideoPlayer = () =>{

    const video = React.useContext(GlobalContext);

    return(
        <>
            <video controls>
                <source src={video.videoSource} type="video/mkv"/>
                <p>error</p>
            </video>
            <button className="btnClose" type="button" onClick={()=>{video.setVideoSource(null)}}><RxCross2/>fechar</button>
        </>
    )
}
/*
preciso criar a tag video e estiliza-la com css
*/
export default VideoPlayer;