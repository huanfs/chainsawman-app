import React,{ useContext } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/*components>>>*/
  import Form from "./components/form/Form.jsx";
  import LoginScreen from "./components/loginScreen/LoginScreen.jsx";
/*<<<components*/
/*context*/
import { GlobalStorage } from "./Context.jsx";
/*context*/
import './App.scss'

function App() {

  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  )
}

export default App;
