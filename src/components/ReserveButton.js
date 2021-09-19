import reserva from '../images/reserva.png'

export const ReserveButton = ({ buttonToChange, clicked, id }) => {

    return (
        <td>
            <button
                type="button"
                className={ clicked ? "btn btn-danger" : "btn btn-primary"  }
                onClick={() => {
                    buttonToChange( id )
                }}
            >
                <img src={reserva} alt="Reservar" width="20"/>
            </button>
        </td>
    )
}
