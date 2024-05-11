import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/*components>>>*/
  import MainApp from "./components/mainApp/MainApp.jsx";
  import LoginScreen from "./components/loginScreen/LoginScreen.jsx";
/*<<<components*/

/*context*/
  import { GlobalStorage } from "./Context.jsx";
/*context*/

import './App.scss'; //<--styles

function App() {

  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen/>}/>
          <Route path="mainApp" element={<MainApp/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  )
}

export default App;


//this app component receive an context encapsulating all other elements
//also, receive 'react-router-dom' to define routes for diferent elements
//here we have inportation of two components ( MainApp, LoginScreen )
//here, if URL path = "/" renders LoginScreen.jsx, else, if URL path = "mainApp"
//renders MainApp.jsx
