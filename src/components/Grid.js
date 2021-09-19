// En este componente generamos el grid de la app

import { useEffect, useReducer, useState } from "react"
import { ridersReducer } from "../hooks/ridersReducer";
import { GridRow } from "./GridRow";

export const Grid = () => {

    //eslint-disable-next-line
    const [ state, dispatch ] = useReducer(ridersReducer, []);
    const [ riders, setRiders ] = useState([]);
    const [pressed, setPressed] = useState(false);

    useEffect( () => {
        // Con el dispatch en update actualizamos los riders
        console.log('get effect')
        dispatch({
            type: 'read'
        });
        // Recuperamos el estado de los riders del localStorage
        setRiders(JSON.parse(localStorage.getItem('riders')));
    }, [pressed]);
    
    // setInterval(() => {
    //     console.log('get interval')
    //     dispatch({
    //         type: 'read'
    //     });
    // }, 15000);
    // Retornamos nuestro componente
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Horas</th>
                <th scope="col">Free Riders</th>
                <th scope="col">Estado</th>
                <th scope="col">Reservar</th>
            </tr>
        </thead>
        <tbody>
            {
                // Comprobaamos que los riders no esten vacíos y llamamos a 
                // GridRow para generar cada fila de la tabla
                riders !== [] && (
                    Object.keys(riders).map( rider => (
                        <GridRow 
                            id={ riders[rider].id }
                            key={ riders[rider].id }
                            hora={ riders[rider].Hora }
                            riders={ riders[rider].Riders }
                            estado={ riders[rider].Estado }
                            pressed={ pressed }
                            setPressed={ setPressed }
                            dispatch={ dispatch }
                        />
                    ))
                )
            }
        </tbody>
    </table>
    )
}
