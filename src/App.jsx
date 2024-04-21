import React,{ useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

/*components>>>*/
  import MainApp from "./components/mainApp/MainApp.jsx";
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
          <Route path="mainApp" element={<MainApp/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  )
}

export default App;
