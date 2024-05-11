import React from "react";

/*components*/
    import Enter from "../enter/Enter.jsx";
    import Register from "../register/Register.jsx";
/*components*/

/*context*/
    import { GlobalContext } from "../../Context.jsx";
/*context*/

import "./Form.scss"; //<--styles

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


//this Form component import Enter.jsx and Register.jsx.

//we consumes the state enter from a GlobalContext here responsible to sets witch of 
//these components will be rendered.