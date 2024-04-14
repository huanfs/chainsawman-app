import React,{ useContext } from "react";

/*components>>>*/
  import Form from "./components/form/Form.jsx";
/*<<<components*/
/*context*/
import { GlobalStorage } from "./Context.jsx";
/*context*/
import './App.scss'

function LoginScreen() {

  return (
    <GlobalStorage>
      <main>
      <aside></aside>
      <Form/>
      </main>
    </GlobalStorage>
  )
}

export default LoginScreen;
