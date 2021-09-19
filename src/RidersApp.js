import { Grid } from "./components/Grid"

export const RidersApp = () => {

    //Este es nuestro componente principal

    return (
        <div className="container">
            <h1 className="text-center mt-5">Horarios disponibles</h1>
            <Grid />
        </div>
    )
}
