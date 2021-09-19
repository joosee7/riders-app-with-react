// En este componente generamos cada una de las filas
//de nuestra app, con cada rider

import { useState } from "react"
import { ReserveButton } from "./ReserveButton"

export const GridRow = ({ id, hora, riders, estado, pressed, setPressed, dispatch }) => {

    const [clicked, setClicked] = useState(false);
    
    const buttonToChange = ( id ) => {
        
        const riderUpdate =  JSON.parse(localStorage.getItem('riders'));
        if ( clicked ){
            riderUpdate[ id - 1 ].Riders = parseInt(riderUpdate[ id - 1 ].Riders) + 1;
        } else {
            riderUpdate[ id - 1 ].Riders = parseInt(riderUpdate[ id - 1 ].Riders) - 1;
        }
        localStorage.setItem('riders', JSON.stringify(riderUpdate));
        dispatch({
            type: 'update'
        });
        setPressed(!pressed);
        setClicked(!clicked);
    };
    
    // setTimeout( function fn() {
        //     setTimeout(press, 1000)
        // }, 1000 )
        
        // window.setInterval( press, 1000 )
        
    // const press = () => {
    //     console.log('press')
    // };

    // setInterval(() => {
    //     press();
    // }, 15000);
    
    return (
        <tr className={ clicked ? "table-danger" : "table-primary" } 
            key={ id } 
            id={ id }
        >
            <th scope="row">{ hora }</th>
            <td>{ riders }</td>
            <td>{ estado }</td>
            <ReserveButton 
                key={ id }
                id={ id }
                buttonToChange={ buttonToChange }
                clicked={ clicked }
            />
        </tr>
    )
}
