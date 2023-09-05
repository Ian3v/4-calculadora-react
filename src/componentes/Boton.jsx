import React from "react";

function Boton (props){

    const esOperador = valor => {
       return isNaN(valor) && (valor !=='.') && (valor !== '=');
    }

    return(
        /* metodo trim, elimna algun espacio al final, para q la clase q tenga este sin espacio*/
        <div 
            className={ `boton-contenedor ${esOperador(props.children) ? 'operador' : '' } `.trimEnd() }
            
            onClick={ () => {
                props.manejarClic(props.children) }
                } 
                >
                    {props.children}
        </div>
    )
}

export default Boton;