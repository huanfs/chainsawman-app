import React, { useState, useRef, useEffect } from "react";

/*context*/
import { GlobalContext } from "../../Context.jsx";
/*context*/

import "./Enter.scss";

const Enter = () => {

    const enterOrRegister = React.useContext(GlobalContext)

    const[userData, setUserData] = useState([]);
    const user = useRef(null);
    const password = useRef(null);
    const userLabel = useRef(null);
    const passwordLabel = useRef(null);

    useEffect(()=>{
        userLabel.current.style.display="none";
        passwordLabel.current.style.display="none";
    },[])
    function CheckUserAnPassword(event){
        if(user.current.value.length < 6){
            userLabel.current.style.display="flex";
            userLabel.current.style.color="var(--VibrantRed)";
            user.current.style.border="1px solid var(--VibrantRed)";
        }
        else{
            userLabel.current.style.display="none";
            user.current.style.border="1px solid var(--SolidBlack)";
        }
        if(password.current.value.length < 8){
            passwordLabel.current.style.display="flex";
            passwordLabel.current.style.color="var(--VibrantRed)";
            password.current.style.border="1px solid var(--VibrantRed)";
        }
        else{
            passwordLabel.current.style.display="none";
            password.current.style.border="1px solid var(--SolidBlack)";
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
            <input type="submit" value="entrar" onClick={ CheckUserAnPassword }/>
            <p onClick={()=>{enterOrRegister.setEnter(!enterOrRegister.enter)}}>não tem uma conta? Registre-se</p>
            <button type="button">entrar como convidado</button>{/*teste sem verificação de dados*/}
        </>
    )
}

export default Enter;