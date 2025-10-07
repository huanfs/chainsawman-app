import React,{ useRef, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../Context.jsx";

import { IsValidCredentials } from "@utils/IsValidCredentials.js";

import { Authentication } from "@services/auth/Authentication.js";

import "./Enter.scss";

const Enter = () => {

    const Navigate = useNavigate();

    const {
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        enter,
        setEnter
    } = useContext(GlobalContext);

    const userLabel = useRef(null);
    const passwordLabel = useRef(null);

    async function HandleAuthentication(event){
        event.preventDefault();
        const isValid = await IsValidCredentials({
            userName, 
            userPassword, 
            userLabel, 
            passwordLabel, 
        });

        if(!isValid) return;

        const authenticated = await Authentication({userName, userPassword});

        if(authenticated){
            Navigate("/mainApp");
        }
    };

    return(
        <>
            <h1>entrar</h1>
            <label 
                htmlFor="user" 
                ref={ userLabel }>
                    nome de usuário:
            </label>
            <input 
                type="text" 
                placeholder="nome de usuário"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)} 
            />
            <label 
                htmlFor="password" 
                ref={ passwordLabel }>
                    senha:
            </label>
            <input 
                type="password" 
                placeholder="sua senha" 
                autoComplete="on"
                value={userPassword}
                onChange={(e)=>setUserPassword(e.target.value)}
            />
            <p>esqueçeu a sua senha?</p>
            <input 
                type="submit" 
                value="entrar" 
                onClick={ (event)=>{ HandleAuthentication(event) }}
            />
            <p 
            onClick={()=>{
                setEnter(!enter)
                }}>
                    não tem uma conta? Registre-se
            </p>
            <button 
                type="button" 
                onClick={()=>Navigate("/mainApp")}>
                    entrar como convidado
            </button>
        </>
    )
}

export default Enter;
