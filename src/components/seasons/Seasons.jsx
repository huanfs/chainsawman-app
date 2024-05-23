import React from "react";

import thumb from "../../../public/thumb/default_thumb.jpg";
import "./Seasons.scss";

function Seasons(){
    return(
        <article className="seasons">
            <img src={thumb}/>
            <h2>temporada 01</h2>
        </article>
    )
}

export default Seasons;