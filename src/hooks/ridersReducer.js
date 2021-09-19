import { getRiders } from "../helpers/getRiders";
import { updateRiders } from "../helpers/updateRiders";

export const ridersReducer = ( state, action ) => {

    // Definimos las diferentes acciones que hará nuestro reducer
    switch (action.type){

        case 'read':
            getRiders()
                .then( data => {
                    // Guardamos los riders en el estado
                    state = [ JSON.parse(localStorage.getItem('riders')), data.record]
                })
                .then( () => {
                    // Guardamos el estado de los riders en el localStorage para poder
                    // recuperarlos desde el componente Grid y poder mostrarlo
                    localStorage.setItem('riders', JSON.stringify(state[0]));
                });
            return state;

        case 'update':
            updateRiders()
            break;
        
        default:
            return state;
    };

};
