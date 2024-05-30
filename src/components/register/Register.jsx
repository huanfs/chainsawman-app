import React, { useState, useRef, useEffect } from "react";

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/

import "./Register.scss"; //<--styles

const Register = () => {

    const registerOptions = React.useContext(GlobalContext); 

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
            setUserName(user.current.value);
            setUserPassword(password.current.value);
            setErrorWithData(false);
            registerOptions.setEnter(!registerOptions.enter);
            /*função de adição*/
            async function CreateNewUser() {
                const User = {
                    userName: registerOptions.userName,
                    userPassword: registerOptions.userPassword,
                };
                try {
                    const CreateUser = await fetch("http://localhost:3000/adicionar", {
                        method: 'POST',
                        body: JSON.stringify(User),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    console.log("Usuário adicionado");
                } catch (err) {
                    console.log("Não foi possível enviar os dados ao banco de dados: " + err);
                }
            }
            
            CreateNewUser();
        }
        event.preventDefault();
    }

    /*definindo a senha e o usuário em local storage*/
    useEffect(()=>{
        registerOptions.setUserName(userName)
        registerOptions.setUserPassword(userPassword);
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
            <p onClick={()=>{registerOptions.setEnter(!registerOptions.enter)}}>já tem uma conta? Entrar</p>
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

