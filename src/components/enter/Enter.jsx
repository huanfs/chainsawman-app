import React,{ useRef, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { GlobalContext } from "@src/Context.jsx";

import { IsValidCredentials } from "@utils/IsValidCredentials.js";

import { Authentication } from "@services/auth/Authentication.js";

import Loading from "@components/loading/Loading.jsx";

import "./Enter.scss";

const Enter = () => {

    const Navigate = useNavigate();

    const {
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        enter,
        setEnter,
        isLoading,
        setIsLoading,
        message,
        setMessage
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

        const isAuthenticated = await Authentication({userName, userPassword});

        setMessage(message=>({status: isAuthenticated.status, text: isAuthenticated.message}));

        if(isAuthenticated){
            console.log(isAuthenticated);
            setIsLoading(false);
            Navigate("/mainApp");
        }
        else{
            setIsLoading(false);
        }
    };

    return(
        <>
            <h1>entrar</h1>
            {
                message != "" && <h3 style={{color:message.status < 399 ? "var(--Green)" : "var(--DesaturedOrange)", marginRight:'auto'}}>{message.text}</h3>
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
