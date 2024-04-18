import React,{ useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { IoPlayCircle } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import imagem_teste from "../../assets/thumb_ep03.jpg";

import "./Episode.scss";

const Episode = () => {

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
                    <img src={imagem_teste} ref={poster} style={{opacity: focus ? "0.8" : "1"}}/>
                    <IoPlayCircle ref={icon_play} style={{display: focus ? "flex" : "none"}}/>
                </div>
                <span style={{color: focus ? "var(--VibrantYellow)" : null}}>episodio 01</span>
                <div className="controls">
                    <FaLongArrowAltLeft/>
                    <FaLongArrowAltRight/>
                </div>
            </article>
            <Link to="/">voltar</Link>
        </>
    )
}

export default Episode;