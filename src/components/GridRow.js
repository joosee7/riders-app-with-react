// En este componente generamos cada una de las filas
//de nuestra app, con cada rider

import { useState } from "react"
import { useModalReserved } from "../hooks/useModalReserved";
import { ReserveButton } from "./ReserveButton"

export const GridRow = ({ id, hora, riders, pressed, setPressed, dispatch }) => {
    
    const [clicked, setClicked] = useState(false);
    const [riderReserved, setRiderReserved] = useModalReserved();

    
    const buttonToChange = ( id ) => {

        // Recuperamos los datos de la API, por si han cambiado    
        dispatch({
            type: 'read'
        });
        const riderUpdate = JSON.parse(localStorage.getItem('riders'));
        // Si alguien ha solicitado ese rider antes salta el modal informando
        if( riderUpdate[ id - 1 ].Riders === 0 ){
            setRiderReserved( !riderReserved );
            return;
        }
        if ( clicked ){
            riderUpdate[ id - 1 ].Riders = parseInt(riderUpdate[ id - 1 ].Riders) + 1;
        } else {
            riderUpdate[ id - 1 ].Riders = parseInt(riderUpdate[ id - 1 ].Riders) - 1;
        }
        localStorage.clear();
        localStorage.setItem('riders', JSON.stringify(riderUpdate));
        dispatch({
            type: 'update'
        });
        setPressed(!pressed);
        setClicked(!clicked);
    };
    
    return (
        <tr className={ clicked || riders === 0 ? "table-danger" : "table-primary" } 
            key={ id } 
            id={ id }
        >
            <th scope="row">{ hora }</th>
            <td>{ riders }</td>
            {
                // Si hay riders mostrará 'disponible', sino 'No disponible'
                riders === 0 ? (<td>No disponible</td>) : (<td>Disponible</td>)
                
            }
            <ReserveButton 
                key={ id }
                id={ id }
                buttonToChange={ buttonToChange }
                clicked={ clicked }
                riders={ riders }
            />
        </tr>
    )
}
