// En este componente generamos cada una de las filas
//de nuestra app, con cada rider

import { useState } from "react"
import { useModalReserved } from "../hooks/useModalReserved";
import { ReserveButton } from "./ReserveButton"

export const GridRow = ({ id, hora, ridersAvailable, pressed, setPressed, getRiders, record }) => {
    
    const [clicked, setClicked] = useState(false);
    const [riderReserved, setRiderReserved] = useModalReserved();
    
    const buttonToChange = ( id ) => {

        document.getElementById(`btn${id}`).disabled = true;

        const ridersModify = () => {
            // Si alguien ha solicitado ese rider antes salta el modal informando
            if( record[ id - 1 ].Riders === 0 ){
                setRiderReserved( !riderReserved );
                return;
            }
            if ( clicked ){
                record[ id - 1 ].Riders = parseInt(record[ id - 1 ].Riders) + 1;
            } else {
                record[ id - 1 ].Riders = parseInt(record[ id - 1 ].Riders) - 1;
            }

        }
        // Recuperamos los datos de la API, por si han cambiado 
        getRiders()
            .then( ridersModify() )
        
            const updateRiders = async () => {
            const url = 'https://api.jsonbin.io/v3/b/614ebd7a4a82881d6c550e11';
            await fetch( url, {
                method: 'PUT',
                headers: { 
                    'X-Master-Key': '$2b$10$nnuSg9tFuinZo/CM8ap4vep/s6l5iQkZwE2JkRHpQaVMGEHdmEqC2',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(record)
            })
                .then( (response) => console.log(response))
                await ( document.getElementById(`btn${id}`).disabled = false )
                await ( setPressed( !pressed ) )
                await ( setClicked( !clicked ) )
            }

        updateRiders();

    };
    
    return (
        <tr className={ clicked || ridersAvailable === 0 ? "table-danger" : "table-light" } 
            key={ id } 
            id={ id }
        >
            <th scope="row">{ hora }</th>
            <td>{ ridersAvailable }</td>
            {
                // Si hay riders mostrará 'disponible', sino 'No disponible'
                ridersAvailable === 0 ? (<td>No disponible</td>) : (<td>Disponible</td>)
            }
            <ReserveButton 
                key={ id }
                id={ id }
                buttonToChange={ buttonToChange }
                clicked={ clicked }
                ridersAvailable={ ridersAvailable }
            />
        </tr>
    )
}
