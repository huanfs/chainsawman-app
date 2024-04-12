import React, { useState, useRef, useEffect } from "react";

/*components>>>*/

/*<<<components*/
import './LoginScreen.scss'

function LoginScreen() {

  const[userData, setUserData] = useState([]);
  const user = useRef(null);
  const password = useRef(null);
  const userLabel = useRef(null);
  const passwordLabel = useRef(null);

  function CheckUserAnPassword(event){
    user.current.value.length < 6 ? userLabel.current.style.display="flex": userLabel.current.style.display="none";
    password.current.value.length < 8 ? passwordLabel.current.style.display="flex" : passwordLabel.current.style.display="none";
    event.preventDefault();
  }

  return (
    <main>
      <aside></aside>
      <form>
        <h1>entrar</h1>
        <label htmlFor="user" ref={ userLabel }>entre com um usuário válido</label>
        <input type="text" placeholder="nome de usuário" ref={ user} />
        <label htmlFor="password" ref={ passwordLabel }>senha incorreta</label>
        <input type="password" placeholder="sua senha" ref={ password }/>
        <p>esqueçeu a sua senha?</p>
        <input type="submit" value="entrar" onClick={ CheckUserAnPassword }/>
        <p>não tem uma conta? registre-se</p>
        <button type="button">entrar como convidado</button>{/*teste sem verificação de dados*/}
      </form>
    </main>
  )
}

export default LoginScreen;
