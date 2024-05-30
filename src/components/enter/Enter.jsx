import React, { useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom"; // IMPORTAÇÃO DO HOOK NAVIGATE

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/

import "./Enter.scss"; //<--styles

const Enter = () => {

    const Navigate = useNavigate(); //PASSANDO O HOOK PARA DENTRO DE UMA VARIÁVEL

    const enterOptions = React.useContext(GlobalContext); //<--consuming context

    /*referencias*/
        const user = useRef(null);
        const password = useRef(null);
        const userLabel = useRef(null);
        const passwordLabel = useRef(null);
        const root = useRef(document.querySelector("#root"));
    /*referencias*/

    /*define as labels para display:none*/
        useEffect(()=>{
            userLabel.current.style.display="none";
            passwordLabel.current.style.display="none";
        },[])
    /*define as labels para display:none*/

    /*caso enterOptions.userName e userPsssword tenham valores definidos (após o registro)
    define em localStorage estes valores*/
        useEffect(()=>{
            enterOptions.userName != null ? localStorage.setItem("userName", enterOptions.userName) : null
            enterOptions.userPassword != null ? localStorage.setItem("userPassword", enterOptions.userPassword): null
        },[enterOptions.userName, enterOptions.userPassword])
    /*caso enterOptions.userName e userPsssword tenham valores definidos (após o registro)
    define em localStorage estes valores*/

    /*caso os valores referentes ao usuario e senha já existam (usuario previamente registrado)
    define os campos de usuario e senha no componente entrar com o usuario e senha previamente registrados */ 
        useEffect(()=>{
            if(localStorage.getItem("userName")){
                user.current.value =  localStorage.getItem("userName")
            }
            if(localStorage.getItem("userPassword")){
                password.current.value =  localStorage.getItem("userPassword")
            }
        })
    /*caso os valores referentes ao usuario e senha já existam (usuario previamente registrado)
    define os campos de usuario e senha no componente entrar com o usuario e senha previamente registrados */

    function Enter(event){
        if(user.current.value == localStorage.getItem("userName") && password.current.value == localStorage.getItem("userPassword")){
            userLabel.current.style.display="none";
            user.current.style.border="1px solid var(--SolidBlack)";
            passwordLabel.current.style.display="none";
            password.current.style.border="1px solid var(--SolidBlack)";
            root.current.style.animationName="slide-out-bck-center";
            AutenticarUsuario();//chamada da função autenticar
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
/*função de autenticar o usuário checando se o mesmo existe na tabela do banco de dados*/
    async function AutenticarUsuario(){
        const dados = {
            usuario: user.current.value,
            senha: password.current.value,
        }
        const Autenticar = await fetch("http://localhost:3000/autenticar",{
            method: 'POST',
            body: JSON.stringify(dados),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const resultado = await Autenticar.json();
        console.log(resultado)
        const timeout = setTimeout((t)=>{
            Navigate("/mainApp"); //MUDANDO A ROTA APÓS TODO O PROCESSAMENTO
        },900);
        timeout();
    }
    /*função de autenticar o usuário checando se o mesmo existe na tabela do banco de dados*/

    return(
        <>
            <h1>entrar</h1>
            <label htmlFor="user" ref={ userLabel }>usuário não encontrado</label>
            <input type="text" placeholder="nome de usuário" ref={ user} />
            <label htmlFor="password" ref={ passwordLabel }>senha incorreta</label>
            <input type="password" placeholder="sua senha" ref={ password } autoComplete="on"/>
            <p>esqueçeu a sua senha?</p>
            <input type="submit" value="entrar" onClick={ Enter }/>
            <p onClick={()=>{enterOptions.setEnter(!enterOptions.enter)}}>não tem uma conta? Registre-se</p>
            <button type="button" onClick={()=>Navigate("/mainApp")}>entrar como convidado</button>
        </>
    )
}

export default Enter;
