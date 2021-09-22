import { useEffect, useReducer, useState } from "react"
import { ridersReducer } from "../hooks/ridersReducer";
import { GridRow } from "./GridRow";

// En este componente generamos el grid de la app
export const Grid = ({ pressed, setPressed }) => {

    //eslint-disable-next-line
    const [ state, dispatch ] = useReducer(ridersReducer, []);
    const [ riders, setRiders ] = useState([]);

    useEffect( () => {
        dispatch({
            type: 'read'
        });
        // Con el dispatch en update actualizamos los riders
        // Recuperamos el estado de los riders del localStorage
        setRiders(JSON.parse(localStorage.getItem('riders')));
    }, [pressed]);
    
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
                // Comprobamos que los riders no sean null y llamamos a 
                // GridRow para generar cada fila de la tabla
                riders !== null &&(
                    Object.keys(riders).map( rider => (
                        <GridRow 
                            id={ riders[rider].id }
                            key={ riders[rider].id }
                            hora={ riders[rider].Hora }
                            riders={ riders[rider].Riders }
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
