
import React from "react";
import '../hestilos/BotonClear.css'
// import Boton from "./Boton";

const BotonClear = (props ) =>{
    return(
    <div 
        className="boton-clear"
        onClick={props.clearInput} 
        >
            {props.children}
    </div>
    )   
};
export default BotonClear;