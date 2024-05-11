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


//this component is responsible for navigation in app.

//we use Links from 'react-router-dom' to sets the navigation.

//import the logotipe.

//we use GlobalContext to consume appSection value.

//we use ref hook to storage the NAV tag (with all navigation buttons inside him).

//we have one function called Navigate(event) using the event as an argument and:
//gets the event innerHTML and save this value in appSection state.

//we use an useEffect hook to sets click event passing the Navigate() to all buttons inside NAV tag storaged in btns ref.