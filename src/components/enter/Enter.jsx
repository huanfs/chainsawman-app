import React,{ useRef, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { GlobalContext } from "@src/Context.jsx";

import { IsValidCredentials } from "@utils/IsValidCredentials.js";

import { Authentication } from "@services/auth/Authentication.js";

import Loading from "@components/loading/Loading.jsx";

import "./Enter.scss";

const Enter = () => {

    const Navigate = useNavigate();

    const[isLogInFailed, setIsLogInFailed] = useState(false); //controla se o usuario foi autenticado ou não e exibe a mensagem

    const {
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        enter,
        setEnter,
        isLoading,
        setIsLoading
    } = useContext(GlobalContext);

    const userLabel = useRef(null);
    const passwordLabel = useRef(null);

    async function HandleAuthentication(event){
        event.preventDefault();
        setIsLoading(true);
        const isValid = await IsValidCredentials({
            userName, 
            userPassword, 
            userLabel, 
            passwordLabel, 
        });

        if(!isValid){
            setIsLoading(false);
            return
        };

        const authenticated = await Authentication({userName, userPassword});

        if(authenticated){
            setIsLoading(false);
            setIsLogInFailed(false);
            Navigate("/mainApp");
        }
        else{
            setIsLogInFailed(true);
            setIsLoading(false);
        }
    };

    return(
        <>
            <h1>entrar</h1>
            {
                isLogInFailed && <h3 style={{color:'var(--FadeRed)', marginRight:'auto'}}>usuário não encontrado!</h3>
            }
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
            {
                isLoading ? (
                    <Loading/>
                ) : (
                    <input 
                        type="submit" 
                        value="entrar" 
                        onClick={ (event)=>{ HandleAuthentication(event) }}
                    />
                )
            }
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
