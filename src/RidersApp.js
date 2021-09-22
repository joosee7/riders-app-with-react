import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from './components/Grid';

export const RidersApp = () => {
    
    // Siempre que pressed cambie actualizamos los riders
    const [pressed, setPressed] = useState(false);

    //eslint-disable-next-line
    let controlledRequest = [];
    
    useEffect( () => {
        /*Petición API para actualizar riders disponibles
        Con cada render del componente controlledRequest se resetea 
        de esta manera no genera algun funcionamiento inesperado*/

            // eslint-disable-next-line
            controlledRequest = setInterval(() => {
                setPressed(!pressed);
            }, 60000);
    });


    //Este es nuestro componente principal

    return (
        <div className="container">
            <h1 className="text-center mt-5">Horarios disponibles</h1>
            <Grid 
                pressed={ pressed }
                setPressed={ setPressed }
            />
        </div>
    )
}
