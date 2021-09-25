import { useEffect, useState } from "react"
import { GridRow } from "./GridRow";

// En este componente generamos el grid de la app
export const Grid = ({ pressed, setPressed }) => {

    // Inicializamos estado del componente
    const [ riders, setRiders ] = useState([]);
    
    const getRiders = async () => {
        const url = 'https://api.jsonbin.io/v3/b/614ebd7a4a82881d6c550e11/latest';
        await fetch( url, { headers: { 'X-Master-Key': '$2b$10$nnuSg9tFuinZo/CM8ap4vep/s6l5iQkZwE2JkRHpQaVMGEHdmEqC2'}} )
            .then( response => response.json())
            .then( data => setRiders( data));
    };

    useEffect( () => {
        getRiders();
    }, [pressed]);

    // Desestructuramos el array de riders
    const { record } = riders;
    
    // Retornamos nuestro componente
    return (
        
        // Si el array de riders es 0 mostramos 'Loading'
            riders.length === 0 ?
            <div className="prueba container position-absolute top-50 start-50">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only w-3"></span>
                </div>
                <p>Loading</p>
            </div>
            :
            // sino mostramos riders
            (   
                <>
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
                            
                            Object.keys(record).map( i => (
                                    <GridRow 
                                        id={ record[i].id }
                                        key={ record[i].id }
                                        hora={ record[i].Hora }
                                        ridersAvailable={ record[i].Riders }
                                        pressed={ pressed }
                                        setPressed={ setPressed }
                                        record={ record }
                                        getRiders={ getRiders }
                                    />
                                    ))
                                    
                        }
                    </tbody>
                </table>
                <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
            </>
            )

    )
}
