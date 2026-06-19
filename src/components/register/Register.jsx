import React, { useState, useRef, useContext } from "react";

import { GlobalContext } from "@src/Context.jsx";

import { IsValidCredentials } from "@utils/IsValidCredentials.js";

import { Registration } from "@services/auth/Registration.js";

import Loading from "@components/loading/Loading.jsx";

import "./Register.scss";

const Register = () => {

    const {
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        authScreen,
        setAuthScreen,
        isLoading,
        setIsLoading,
        message,
        setMessage
    } = useContext(GlobalContext); 
    
    const[samePassword, setSamePassword] = useState();

    const[error, setError] = useState(false);

    const user = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    async function HandleRegistration(event){
        event.preventDefault();
        setIsLoading(true);
        const isValid = await IsValidCredentials({userName, userPassword, samePassword});
        if(!isValid){
            setIsLoading(false);
            setError(true);
            return;
        };
        const isRegisted = await Registration({userName, userPassword});
        setMessage({
            status: isRegisted.status,
            text: isRegisted.message
        });
        if(isRegisted.success){
            console.log(isRegisted.message);
            setIsLoading(false);
            setAuthScreen("login");
        }
        else{
            console.log(isRegisted.message);
            setIsLoading(false);
        }
    }

    return(
        <>
            <h1>registrar</h1>
            {
                message.text != "" && 
                <article
                className="dialog" 
                >
                    <h3>{message.text}</h3>
                    <div>
                        <button
                            type="button"
                            onClick={() => {
                                setAuthScreen("login");
                                setMessage("");
                            }}
                        >
                            quero fazer logIn
                        </button>
                    </div>
                </article>
            }
            <label 
                htmlFor="createUser">
                    nome de usuário
            </label>
            <input 
                type="text" 
                ref={ user }
                onChange={(event)=>setUserName(event.target.value)}
            />
            <label 
                htmlFor="createPassword">
                    crie sua senha
            </label>
            <input 
                type="password" 
                ref={ password }
                onChange={(event)=>setUserPassword(event.target.value)}
            />
            <label 
                htmlFor="confirmPassword">
                    confirme sua senha
            </label>
            <input 
                type="password" 
                ref={ confirmPassword }
                onChange={(event)=>setSamePassword(event.target.value)}
            />
            <p onClick={()=>{
                setEnter(!enter)}}>
                    já tem uma conta? Entrar
            </p>
            {
                isLoading ? ( 
                <Loading/>
             ) : (
                <input 
                    type="submit" 
                    value="registar" 
                    onClick={(event)=>HandleRegistration(event)}
                />
             )
            }
            {
                error && (
                    <ul className="error-hint">
                        <li>seu usuário deve ter entre 6 e 8 caracteres</li>
                        <li>sua senha deve ter entre 8 e 12 caracteres</li>
                        <li>suas senhas devem coincidir</li>
                    </ul>
                )
            }
        </>
    )
}

export default Register;