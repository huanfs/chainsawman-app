import React from "react";

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

