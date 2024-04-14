import React from "react";

/*components*/
    import Enter from "../enter/Enter.jsx";
    import Register from "../register/Register.jsx";
/*components*/

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/
import "./Form.scss";
import { BiRegistered } from "react-icons/bi";

const Form = () => {

    const enterOrRegister = React.useContext(GlobalContext);

    return(
        <form>
            {
                enterOrRegister.enter ? (
                    <Register/>
                ) : (
                    <Enter/>
                )
            }
        </form>
    )
}

export default Form;