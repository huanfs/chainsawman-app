import React, { useState, useRef, useEffect } from "react";

/*context*/
import { GlobalContext } from "../../Context.jsx";
/*context*/

import { NavLink } from "react-router-dom";

import "./Enter.scss";

const Enter = () => {

    const enterOrRegister = React.useContext(GlobalContext)

    const[userData, setUserData] = useState([]);
    const user = useRef(null);
    const password = useRef(null);
    const userLabel = useRef(null);
    const passwordLabel = useRef(null);
    const root = useRef(document.querySelector("#root"));

    useEffect(()=>{
        userLabel.current.style.display="none";
        passwordLabel.current.style.display="none";
    },[])

    useEffect(()=>{
        const theUser = localStorage.getItem("userName");
        const thePassword = localStorage.getItem("userPassword");

        user.current.value= theUser;
        password.current.value= thePassword;
    },[])

    function Enter(event){
        if(user.current.value == localStorage.getItem("userName") && password.current.value == localStorage.getItem("userPassword")){
            userLabel.current.style.display="none";
            user.current.style.border="1px solid var(--SolidBlack)";
            passwordLabel.current.style.display="none";
            password.current.style.border="1px solid var(--SolidBlack)";
            root.current.style.animationName="slide-out-bck-center";
        }
        else if(user.current.value != localStorage.getItem("userName")){
            userLabel.current.style.display="flex";
            userLabel.current.style.color="var(--VibrantRed)";
            user.current.style.border="1px solid var(--VibrantRed)";
        }
        else if(password.current.value != localStorage.getItem("userPassword")){
            passwordLabel.current.style.display="flex";
            passwordLabel.current.style.color="var(--VibrantRed)";
            password.current.style.border="1px solid var(--VibrantRed)";
        }
        event.preventDefault();
    }

    return(
        <>
            <h1>entrar</h1>
            <label htmlFor="user" ref={ userLabel }>entre com um usuário válido</label>
            <input type="text" placeholder="nome de usuário" ref={ user} />
            <label htmlFor="password" ref={ passwordLabel }>senha incorreta</label>
            <input type="password" placeholder="sua senha" ref={ password }/>
            <p>esqueçeu a sua senha?</p>
            <input type="submit" value="entrar" onClick={ Enter }/>
            <p onClick={()=>{enterOrRegister.setEnter(!enterOrRegister.enter)}}>não tem uma conta? Registre-se</p>
            <button type="button"><NavLink to="teste">entrar como convidado</NavLink></button>
        </>
    )
}

export default Enter;