import React,{ useEffect, useRef } from "react";

import { Link } from "react-router-dom";

import { GlobalContext } from "../../Context.jsx";

import Logo from "../../assets/logo.png";

import "./HeaderNavigation.scss"; //<--styles

const HeaderNavigation = () => {

    const appSection = React.useContext(GlobalContext);

    const btns = useRef(null);

    function Navigate(event){
        appSection.setAppSection(event.target.innerHTML);
    }

    useEffect(()=>{
        for(let i = 0; i < btns.current.children.length; i ++){
            btns.current.children[i].addEventListener("click", Navigate)
        }
    })

    return(
        <header>
            <div className="logo">
                <img src={Logo}/>
            </div>
            <nav className="navigation" ref={btns}>
                <button type="button">episodios</button>
                <button type="button">sinopse</button>
                <button type="button">temporadas</button>
                <button type="button"><Link to={"/"} className="exit">sair</Link></button>
            </nav>
        </header>
    )
}

export default HeaderNavigation;
