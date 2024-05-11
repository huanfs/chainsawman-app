import React,{ useContext } from "react";

/*components>>>*/
  import Form from "../form/Form.jsx";
/*<<<components*/

/*context*/
  import { GlobalStorage } from "../../Context.jsx";
/*context*/

import './LoginScreen.scss'; //<--styles

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

//import Form.jsx.

//import GlobalStorage encapsulating MAIN tag.

//inside MAIN render an aside (with an animate background) and Form.jsx.
