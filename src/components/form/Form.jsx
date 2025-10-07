import React,{ useContext } from "react";

import Enter from "@components/enter/Enter.jsx";
import Register from "@components/register/Register.jsx";

import { GlobalContext } from "@src/Context.jsx";

import "./Form.scss";

const Form = () => {

    const { enter } = useContext(GlobalContext);

    return(
        <form>
            {
                enter ? (
                    <Register/>
                ) : (
                    <Enter/>
                )
            }
        </form>
    )
}

export default Form;
