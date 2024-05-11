import React, { useState, useRef, useEffect } from "react";

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/

import { NavLink } from "react-router-dom";

import "./Enter.scss"; //<--styles

const Enter = () => {

    const enterOrRegister = React.useContext(GlobalContext); //<--consuming context

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
            <label htmlFor="user" ref={ userLabel }>usuário não encontrado</label>
            <input type="text" placeholder="nome de usuário" ref={ user} />
            <label htmlFor="password" ref={ passwordLabel }>senha incorreta</label>
            <input type="password" placeholder="sua senha" ref={ password }/>
            <p>esqueçeu a sua senha?</p>
            <input type="submit" value="entrar" onClick={ Enter }/>
            <p onClick={()=>{enterOrRegister.setEnter(!enterOrRegister.enter)}}>não tem uma conta? Registre-se</p>
            <button type="button"><NavLink to="mainApp">entrar como convidado</NavLink></button>
        </>
    )
}

export default Enter;


//this component consumes context for access enter state from GlobalContext.

//we have some refs for some HTML tags here like: [
//  user -> first input tag (to enter with user name);
//  password -> the second input tag (to enter with user password);
// userLabel -> the label for user input;
// passwordLabel -> the label for password input;
// root -. label for #root div;
//]

//we use an useEffect to sets userLabel and passwordLabel to display:none;

//we use another useEffect to get in localStorage both user and password and
//sets refs for user and password with the respectively values from localStorage.

//we have an function called Enter(event), receiving as argument the event, this function:
//checks the values in user and password refs matches with values userName and userPassword in localStorage
//if match turn labels userLabel and passwordLabel to display:none and they colors to (--SolidBlack)
//starts an fade animation;
//now, if only user does not match with userName value in localStorage sets the user borderColor to (--VibrantRed)
//and sets userLabel to display:flex and color to (--VibrantRed);
//finaly, in the last case, if only password value does not matches with userPassword value in localStorage
//sets password to borderColor:var(--VibrantRed) and passwordLabel to display:flex and (--VibrantRed) color;
//the last comand is an preventDefault to block reaload.