import React,{ useContext } from "react";

import Enter from "@components/enter/Enter.jsx";
import Register from "@components/register/Register.jsx";

import { GlobalContext } from "@src/Context.jsx";

import "./Form.scss";

const Form = () => {

    const { authScreen } = useContext(GlobalContext);

    return(
        <form>
            {
                authScreen == "register" ? (
                    <Register/>
                ) : (
                    <Enter/>
                )
            }
        </form>
    )
}

export default Form;
