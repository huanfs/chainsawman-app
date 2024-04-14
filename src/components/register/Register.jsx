import React, { useState, useRef, useEffect } from "react";

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/

import "./Register.scss";

const Register = () => {

    const enterOrRegister = React.useContext(GlobalContext); 

    const[userName, setUserName] = useState();
    const[userPassword, setUserPassword] = useState();
    const[errorWithData, setErrorWithData] = useState(false);

    const user = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    function CheckUserName(){
        user.current.value.length < 6 ? user.current.style.border="1px solid var(--VibrantRed)" : user.current.style.border="1px solid var(--Green)";
    }
    function CheckPassword(){
       if(password.current.value == confirmPassword.current.value){
        password.current.style.border="1px solid var(--Green)";
        confirmPassword.current.style.border="1px solid var(--Green)";
       }
       if(password.current.value != confirmPassword.current.value){
        password.current.style.border="1px solid var(--VibrantRed)";
        confirmPassword.current.style.border="1px solid var(--VibrantRed)";
       }
    }
    function Register(event){
        if(password.current.value != confirmPassword.current.value || user.current.value.length < 6){
            setErrorWithData(true);
        }
        else{
            setErrorWithData(false);
            setUserName(user.current.value);
            setUserPassword(password.current.value);
            enterOrRegister.setEnter(!enterOrRegister.enter)
        }
        event.preventDefault();
    }

    /*definindo a senha e o usuário em local storage*/
    useEffect(()=>{
        localStorage.setItem("userName", userName);
        localStorage.setItem("userPassword", userPassword);
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