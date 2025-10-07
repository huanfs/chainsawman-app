import React from "react";

import Form from "@components/form/Form.jsx";

import { GlobalStorage } from "@src/Context.jsx";

import './LoginScreen.scss';

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

