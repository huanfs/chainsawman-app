import React, { useState, useRef, useEffect } from "react";

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/

import "./Register.scss"; //<--styles

const Register = () => {

    const enterOrRegister = React.useContext(GlobalContext); 

    const[errorWithData, setErrorWithData] = useState(false);

    const[userName, setUserName] = useState();
    const[userPassword, setUserPassword] = useState();

    const user = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    function CheckUserName(event){
        user.current.value.length < 6 ? (user.current.style.border="1px solid var(--VibrantRed)") : (user.current.style.border="1px solid var(--Green)", setUserName(event.target.value));
        
    }
    function CheckPassword(event){
       if(password.current.value == confirmPassword.current.value){
        password.current.style.border="1px solid var(--Green)";
        confirmPassword.current.style.border="1px solid var(--Green)";
        setUserPassword(event.target.value)
       }
       if(password.current.value != confirmPassword.current.value){
        password.current.style.border="1px solid var(--VibrantRed)";
        confirmPassword.current.style.border="1px solid var(--VibrantRed)";
       }
    }
    //mandar essa função Register para dentro de alguma das outras funções anteriores
    function Register(event){
        if(password.current.value != confirmPassword.current.value || user.current.value.length < 6){
            setErrorWithData(true);
        }
        else{
            //o erro está aqui, os estados não estão sendo atualizados rapidamente
            setUserName(user.current.value);
            setUserPassword(password.current.value);
            setErrorWithData(false);
            enterOrRegister.setEnter(!enterOrRegister.enter);
        }
        event.preventDefault();
    }

    /*definindo a senha e o usuário em local storage*/
    useEffect(()=>{
        localStorage.setItem("userName", userName)
        localStorage.setItem("userPassword", userPassword)
    },[userName, userPassword]);


    return(
        <>
            <h1>registrar</h1>
            <label htmlFor="createUser">nome de usuário</label>
            <input type="text" ref={ user } onChange={ CheckUserName }/>
            <label htmlFor="createPassword">crie sua senha</label>
            <input type="password" ref={ password }/>
            <label htmlFor="confirmPassword">confirme sua senha</label>
            <input type="password" ref={ confirmPassword } onChange={ CheckPassword }/>
            <p onClick={()=>{enterOrRegister.setEnter(!enterOrRegister.enter)}}>já tem uma conta? Entrar</p>
            <input type="submit" value="registar" onClick={Register}/>
            {
                errorWithData && (
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


//this component is responsible for save values for user name and password.

//we import GlobalContext to get access of enter value inside Context.

//here we have some states to manage data like: [
//  errorWithData ->  get an error if thei exists (more explanations next),
//  userName ->  saves user name you entered,
//  userPassword -> saver password you enetered,
//].

//we use ref hook to get all three input tag responsible respectively for: 
//user name, user password, confirm password.

//CheckUserName(event) function receive event as argument and:
//checks if user ref value length is less than 6, if true sets user color to (--VibrantRed), 
//else, set's it to (--Green) and save they value in userName state.

//CheckPassword(event) receive event as argument and checks if the value passed to 
//password is the same value passed to confirmPassword, if true set's both password 
//and confirmPassword border color to (--Green) and save this value in userPassword state.
//else sets both password and confirmPassword border color to (--VibrantRed).

//Register(event) checks the values passed in user, password and confirm password,
//if user value length less than 6 characters or password value differs from checkPassword value, 
//sets inversal value in state errorWithData, finally uses an preventDefault from event to block page reload.

//we use an useEffect hook to save in localStorage both user name and password (if everything's ok with them)
//watching userName and userPassword values changes.
