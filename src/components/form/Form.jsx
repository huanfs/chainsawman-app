import React,{ useContext } from "react";

import Enter from "../enter/Enter.jsx";
import Register from "../register/Register.jsx";

import { GlobalContext } from "../../Context.jsx";

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
